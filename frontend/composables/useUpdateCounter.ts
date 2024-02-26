// useUpdateCounter

// export default function (product: Product) {

//     if (localStorage.getItem('korzina') === null) {
//         product.amount = 1
//         let productsInCart = [product]
//         localStorage.setItem('korzina', JSON.stringify(productsInCart));
//     } else {
//         let productsInCart: Array<Product> = JSON.parse(localStorage.getItem('korzina'));
        
//         if (productsInCart.find(item => item.id === product.id) === undefined) {
//             product.amount = 1
//             productsInCart.push(product)
//             localStorage.setItem('korzina', JSON.stringify(productsInCart));
//         } else {
//             productsInCart.splice(productsInCart.findIndex(item => item.id === product.id), 1)
//             localStorage.setItem('korzina', JSON.stringify(productsInCart));
//         }
//     }
// }