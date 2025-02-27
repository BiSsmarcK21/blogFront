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

    deletePost(body) {
        return httpClient(`${this.endPoint}/delete/`, {
            method: 'DELETE',
            body
        })
    },

    updatePost(body) {
        return httpClient(`${this.endPoint}/update`, {
            method: 'POST',
            body
        })
    }
})

export default post
