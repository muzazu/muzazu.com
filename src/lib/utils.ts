import { ClassValue, clsx } from 'clsx'
import { format } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`
}

export function usDateString(date: string) {
	const nDate = new Date(date)

	return format(nDate, 'PPPP')
}
