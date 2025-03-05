export default function usePostsState() {
    const posts = useState('posts', () => [])
    const isLoading = ref(false)

    const { $api } = useNuxtApp()

    async function initPosts () {
        isLoading.value = true
        const data = await $api.post.getPosts()

        if(data) {
            posts.value = [...data]
        }

        isLoading.value = false
    }

    function pushPost (post) {
        posts.value.push(post)
    }

    initPosts()

    return { posts, isLoading, pushPost }
}