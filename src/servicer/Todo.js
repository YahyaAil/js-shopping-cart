const { default: axios } = require("axios");

class Todo {
    #baseUrl = "https://fakestoreapi.com/products";

    async list() {
        return await axios.get(this.#baseUrl)
    }


    async add(data) {
        return await axios.post(`${this.#baseUrl}`, data)
    }


    async delete(id) {
        return await axios.delete(`${this.#baseUrl}/${id}`)
    }
}

module.exports = new Todo