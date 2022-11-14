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

export const fillCart = (props) => {
    let products = [];
    let total = 0
    for(let i = 0; i < sessionStorage.length; i++){
       let productKey = sessionStorage.key(i);
       let iten = JSON.parse(sessionStorage.getItem(productKey))
       products.push(iten);
       total += iten.price - (iten.price * iten.discountPercentage / 100).toFixed(2)
    }

    props(total)

    return products
}