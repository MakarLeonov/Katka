interface Product {
    id: number,
    author: string,
    rating: number,
    male: string,
    comment: string,
    created_at: string,
    amount?: number,
}

export default function (product: Product) {
    let productsInCart: Array<Product> = JSON.parse(localStorage.getItem('korzina'));

    if (localStorage.getItem('korzina') === null) {
        return false
    } else if (productsInCart.find(item => item.id === product.id && item.author === product.author) === undefined) {
        return false
    } else {
        return true
    }
}