import HttpClient from "../Util/HttpClient";



export async function fetchCategoryData(data){
    let result=await HttpClient.requestData('products/categories','GET')
    return result
}

export async function fecthAllProduct(){
    let res=await HttpClient.requestData('products','GET')
    return res
}


export async function fetchProductByCatagory(data){
    const result=await HttpClient.requestData(`products/category/${data}`,'GET')
    return result
}

export async function fetchSingleProduct(data){
    const res= await HttpClient.requestData(`products/${data}`,'GET')
    return res
}