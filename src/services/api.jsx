import api from "./axios"

export const getCategories = (props) => {
    api.get('categories')
    .then((response) => props(response.data))
}

export const getProducts = (props, limit) => {
    api.get('?limit=' + limit)
    .then((response) => props(response.data.products))
}

export const getSingleProducts = (props, id) => {
    api.get(id)
    .then((response) => props(response.data))
}

export const getFilteredProducts = (props, filter) => {
    api.get('category/'+filter)
    .then((response) => props(response.data.products)) 
}

export const getRelated = (related, id) => {
    let category = ''
    api.get(id)
    .then((response) => api.get('category/'+response.data.category)
    .then((response) => related(response.data.products))
    )
}

export const fillCart = () => {
    let products = [];
    for(let i = 0; i < sessionStorage.length; i++){
       let productKey = sessionStorage.key(i);
       products.push(JSON.parse(sessionStorage.getItem(productKey)))
    }

    return products
}