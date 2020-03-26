Structuring Redux Store
========================

### Example product list
1) create base reducer productList 
2) normalize data (basic, move id as key)
3) create reducer visibleProductList, which contain ids 
4) create selector for visibleProductList, check if productList / visibleProductList changed or timestamp outdated
5) if true call action creator to dispatch productList


### Example on paginate
Replace productList / visibleProductList with returned data from API

### Example product detail
1) check if productList[product.id] exist
2) if true return data
3) if false call action creator to dispatch data and update productList[product.id]
4) create reducer visibleProductDetail, which contain an id
5) create selector for visibleProductDetail, check if some data exist or not.
6) if false call action creator to dispatch data and update productList[product.id]

### Posibility Issues
1) When action creator productDetail called, visibleProductList maybe triggered
2) When user on product detail page and the product didn't exist on productList, data probably not clean (except: when visibleProductList pure / not mutated)
3) Probably can cause infinite loop between visibleProductList & visibleProductDetail

### TODO
* move methods from container to Redux
* learn more about memoize data
* learn more about normalize data