const config = useRuntimeConfig()

export default defineEventHandler(() => {
    return {
        apiUrl: config.API_URL,
    }
})
