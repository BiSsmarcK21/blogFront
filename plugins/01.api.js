import post from '@/api/post.js'

export default defineNuxtPlugin(async (nuxtApp) => {
    const headers = useRequestHeaders(['cookie'])
    const apiConfig = await $fetch('/api/config')

    const _fetch = baseURL => $fetch.create({
        baseURL,
        headers,
        credentials: 'include',
    })

    return {
        provide: {
            api: {
                post: post(_fetch(`${apiConfig?.apiUrl}/api/v1`)),
            },
        },
    }
})
