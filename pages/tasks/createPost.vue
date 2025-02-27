<script setup>

const title = ref();
const content = ref();

const { $api } = useNuxtApp()
// TODO: Обернуть в  try catch
const createPost = async () => {
  $api.post.createPost({
    title: title.value,
    content: content.value,
  });

  title.value = ''
  content.value = ''
  navigateTo('/tasks/showPosts')
}
</script>

<template>
  <div>
    <h1>Добавить пост</h1>
    <form>
      <input v-model="title" placeholder="Заголовок" />
      <textarea v-model="content" placeholder="Содержание"></textarea>
      <button type="button" @click="createPost">Создать</button>
    </form>
  </div>
</template>