const fsPromises = require("fs").promises
const fs = require("fs")
const path = require("path")
const merge = require("lodash").merge

/**
 * handle convert MD file to JSON
 * extend from https://github.com/rpearce/parse-md/blob/master/source/index.js
 * @param {string} content
 * @return {{content:'string', metadata:'object'}}
 */
const handleMDtoJSON = (contents) => {
    const lines = contents.split("\n")
    const metadataIndices = lines.reduce((mem, item, i) => {
        if (/^---/.test(item)) {
            mem.push(i)
        }
        return mem
    }, [])
    const metadata = (({ lines, metadataIndices }) => {
        if (metadataIndices.length > 0) {
            const metadata = lines.slice(
                metadataIndices[0] + 1,
                metadataIndices[1]
            )

            const meta = {}
            for (const line of metadata) {
                const [attr, value] = line.split(": ")
                meta[attr] = value.replace("\r", "")
            }
            return meta
        }
        return {}
    })({ lines, metadataIndices })
    const content = (({ lines, metadataIndices }) => {
        if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length)
        }
        const data = lines.join("\n")
        return data.replace("\r", "")
    })({ lines, metadataIndices })

    return { metadata, content }
}

/**
 * handle write file
 * @param {{object, object}} param0
 */
const handleWriteFile = async ({ selectors, data }) => {
    try {
        let staticPath
        if (process.env.NODE_ENV === "production") {
            staticPath = path.resolve("build", "static", "data")
        } else {
            staticPath = path.resolve("public", "static", "data")

            const publicStaticPath = path.resolve("public", "static")
            if (!fs.existsSync(publicStaticPath))
                await fsPromises.mkdir(publicStaticPath)
        }

        if (!fs.existsSync(staticPath)) await fsPromises.mkdir(staticPath)
        await fsPromises.writeFile(
            path.resolve(staticPath, "selectors.json"),
            JSON.stringify(selectors).replace(".md", "")
        )

        const uIds = Object.keys(data)
        for (const uId of uIds) {
            await fsPromises.writeFile(
                path.resolve(staticPath, `${uId}.json`),
                JSON.stringify(data[uId]).replace(".md", "")
            )
        }
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * handle read files
 * @param {string} folderPath
 */
const handleReadDir = async (folderPath) => {
    try {
        const contents = await fsPromises.readdir(folderPath)
        const selectors = []
        let data = {}
        for (const file of contents) {
            const content = await fsPromises.readFile(
                path.resolve(folderPath, file)
            )
            const contentParsed = handleMDtoJSON(content.toString())
            const date = new Date(contentParsed.metadata.created_at)
            const uId = `${date.getMonth()}-${date.getFullYear()}`
            const item = { [contentParsed.metadata.title]: contentParsed }
            data[uId] = merge(data[uId], item)
            selectors.push(`${uId}:${contentParsed.metadata.title}`)
        }

        handleWriteFile({ selectors, data })
    } catch (error) {
        throw new Error(JSON.stringify(error))
    }
}

/**
 * md to json
 */
class MDtoJSON {
    /**
     * @param {string} folderPath
     */
    constructor(folderPath) {
        if (typeof folderPath !== "string") {
            throw new Error("folder path should be a string")
        }
        this.folderPath = folderPath
    }

    apply(compiler) {
        const plugin = { name: "MDtoJSON" }

        compiler.hooks.emit.tapAsync(plugin, (compilation, callback) => {
            handleReadDir(this.folderPath)
            callback()
        })
    }
}

module.exports = MDtoJSON
