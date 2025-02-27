<script setup>
const { $api } = useNuxtApp()
const { data: posts, error } = await useAsyncData('getPosts', () => $api.post.getPosts())

const deletePost = async (id) => {
  try {
    $api.post.deletePost({
      id
    })
    const postId = posts.value.findIndex(post => post.id === id)
    if (postId !== -1) {
      posts.value.splice(postId, 1)
    }
  } catch (err) {
    console.log(err)
  }

}
</script>

<template>
  <div>
    <h1>Блог</h1>
    <button @click="navigateTo('/tasks/createPost')">Создать пост</button>
    <div v-if="posts && posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <button type="button" @click="deletePost(post.id)" >Удалить</button>
      </div>
    </div>

    <div v-else>
      <p>Постов нет</p>
    </div>
  </div>
</template>

<style lang="scss" module>

</style>