import api from "./axios"

export const getCategories = (props) => {
    api.get('categories')
    .then((response) => props(response.data))
}

export const getProducts = (props) => {
    api.get()
    .then((response) => props(response.data))
}