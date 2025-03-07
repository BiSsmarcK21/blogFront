export default function usePostsState() {
    const posts = useState('posts', () => [])
    const isLoading = ref(false)

    const { $api } = useNuxtApp()

    async function withLoading(fn) {
        isLoading.value = true
        try {
            await fn()
        } finally {
            isLoading.value = false
        }
    }

    async function initPosts () {
        await withLoading(async () => {
            const data = await $api.post.getPosts()

            if(data) {
                posts.value = [...data]
            }
        })
    }

    function pushPost(post) {
        posts.value.push(post)
    }

    function deletePost(id) {
        const postId = posts.value.findIndex(post => id)
        posts.value.splice(postId, 1)
    }

    async function updatePost(post) {
        await withLoading(async () => {
            const postId = posts.value.findIndex(post => post.id)
            posts[postId] = post
        })
    }

    initPosts()

    return { posts, isLoading, pushPost, deletePost, updatePost }
}