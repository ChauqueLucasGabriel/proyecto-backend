import fs from 'fs'

const route="./static/products.json"

class productManager {
    constructor(){
        this.route=route
    }
    async loadProducts(){
        const json=await fs.readFile(this.route,'utf-8')
        this.route = JSON.parse(json)
    }

    async saveProducts(){
        const json=JSON.stringify(this.route,null, 2)
        await fs.writeFile(this.route,json)
    }

    async showProducts(){
        await this.loadProducts()
        console.log(this.route)
    }

    async addProducts(newProduct){
        await this.loadProducts()
        this.route.push(newProduct)
        await this.saveProducts()
    }

    async delateProduct(){
        await fs.rm(this.route)
    }
        
    
}

await route.showProducts()
await route.addProducts({
    "title":"producto prueba2",
    "description":"este es un producto prueba2",
    "price":"902",
    "thumbnail":"sin imagen",
    "code":"cie1342",
    "stock":"29"
})

await route.showProducts()