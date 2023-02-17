class productManager {
    static cant = 0
    
    constructor(products){
        this.products = products
        this.count = 0
    }

    counter(){
        this.counter++
        productManager.cant++
    }

    getProducts(){
        return this.getProducts =product.arguments
        
    }

    addProducts(){
        

    }
    allProductCount(){
        return productManager.cant

    }
    
}
class product{
    constructor(title,description,price,thumbnail,code,stock=30){
        this.title = title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock=stock
    }
}

console.log(productManager)