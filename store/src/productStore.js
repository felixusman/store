//Vegetable: price_1MhtfzLWsPFQoDXOnbNOkjLz
//Banana: price_1Mhtl9LWsPFQoDXOIWNVaXRv
//Coconut: price_1MhtmzLWsPFQoDXOVYTzJBx7
//Lemon Orange: price_1MhtoZLWsPFQoDXOAotpbR1R
//Water Leave: price_1MhtqlLWsPFQoDXOueiwB3b3
//Local Banana: price_1MhttMLWsPFQoDXOtO315BVd
const productArray = [
    {
        id: "price_1MhtfzLWsPFQoDXOnbNOkjLz",
        image: "./Images/vegitable.png",
        info: "This is all the infomation you need to know about this recipe",
        title: "Vegetable",
        category: "vegitables",
        price: "30000",
        },
    {
        id: "price_1Mhtl9LWsPFQoDXOIWNVaXRv",
        image: "./Images/banana.png",
        info: "This is all the infomation you need to know about this recipe",
        title: "Banana",
        category: "fruits",
        price: "19000"
    },
    {
        id: "price_1MhtmzLWsPFQoDXOVYTzJBx7",
        image: "./Images/coconut.png",
        info: "This is all the infomation you need to know about this recipe",
        title: "Coconut",
        category: "fruits",
        price: "3000"
    },
    {
        id: "price_1MhtoZLWsPFQoDXOAotpbR1R",
        image: "./Images/lemon.png",
        info: "This is all the infomation you need to know about this recipe",
        title: "Lemon Orange",
        category: "oranges",
        price: "14500"
    },
    {
        id: "price_1MhtqlLWsPFQoDXOueiwB3b3",
        image: "./Images/leaves.png",
        info: "This is all the infomation you need to know about this recipe",
        title: "Water leave",
        category: "vegitables",
        price: "22000"
    },
    {
        id: "price_1MhttMLWsPFQoDXOtO315BVd",
        image: "./Images/banana.png",
        info: "This is all the infomation you need to know about this recipe",
        title: "Local Banana",
        category: "fruits",
        price: "15000"
    },
]
function getProductData(id) {
    let productData = productArray.find(product => product.id === id)
        if(productData == undefined){
            console.log("product data does not exist for ID: "+ id)
              return undefined
        }
        return productData
}

export { productArray, getProductData }