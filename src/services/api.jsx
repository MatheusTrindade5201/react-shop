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