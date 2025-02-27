<template>
  <div>
    <h1>Изменить пост</h1>
    <form>
      <input v-model="title" placeholder="Заголовок" />
      <textarea v-model="content" placeholder="Содержание"></textarea>
      <button type="button" @click="createPost">Обновить</button>
    </form>
  </div>
</template>