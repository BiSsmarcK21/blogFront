const post = httpClient => ({
    endPoint: '/post',

    getPosts() {
        return httpClient(this.endPoint)
    },

    createPost(body) {
        return httpClient(`${this.endPoint}/create`, {
            method: 'POST',
            body
        })
    },

    deletePost(id) {
        return httpClient(`${this.endPoint}/delete/`, {
            method: 'POST',
            body: {
                id
            }
        })
    },

    updatePost(body) {
        console.log(body)
        return httpClient(`${this.endPoint}/update`, {
            method: 'POST',
            body
        })
    }
})

export default post
