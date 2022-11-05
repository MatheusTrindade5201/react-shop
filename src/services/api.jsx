import api from "./axios"

export const getCategories = (props) => {
    api.get('categories')
    .then((response) => props(response.data))
}

export const getProducts = (props) => {
    api.get()
    .then((response) => props(response.data.products))
}

export const getFilteredProducts = (props, filter) => {
    api.get('category/'+filter)
    .then((response) => props(response.data.products)) 
}