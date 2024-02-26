interface Product {
    id: number,
    name: string,
    genre: string,
    author?: string,
    image: string,
    price: number,
    memory?: number,
    description?: string,
    created_at?: string,
    platform: {
        id: number,
        name: string,
        created_at: string,
        updated_at: string,
    }
    amount?: number,
}

export default function (product: Product) {

    if (localStorage.getItem('korzina') === null) {
        product.amount = 1
        let productsInCart = [product]
        localStorage.setItem('korzina', JSON.stringify(productsInCart));
    } else {
        let productsInCart: Array<Product> = JSON.parse(localStorage.getItem('korzina'));
        
        if ((productsInCart.find(item => item.id === product.id && item.author === product.author) === undefined)) {
            product.amount = 1
            productsInCart.push(product)
            localStorage.setItem('korzina', JSON.stringify(productsInCart));
        } else {
            productsInCart.splice(productsInCart.findIndex(item => item.id === product.id && item.author === product.author), 1)
            localStorage.setItem('korzina', JSON.stringify(productsInCart));
        }
    }
}