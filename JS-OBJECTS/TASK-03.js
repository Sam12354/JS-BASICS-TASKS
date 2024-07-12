function storeProvision(array, array2){
    let allProducts = []
    let products = {}

    for(let i = 0; i < array.length; i += 2){
        let curProduct = array[i]
        let qty = Number(array[i + 1])

        products = { curProduct, qty }
        allProducts.push(products)
    }

    for(let i = 0; i < array2.length; i += 2){
        let curProduct = array2[i]
        let qty = Number(array2[i + 1])

        let findProduct = allProducts.find(p => p.curProduct === curProduct)

        if(findProduct){
            findProduct.qty += qty
        }else{
            products = { curProduct, qty }
            allProducts.push(products)
        }
    }

    for(let product of allProducts){
        console.log(`${product.curProduct} -> ${product.qty}`);
    }

}
storeProvision
([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
])
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'  
])
