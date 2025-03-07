<script setup>
const props = defineProps({ post: Object })
const { updatePost: updateThisPost } = usePostsState()

const title = ref(props.post?.title || '')
const content = ref(props.post?.content || '')

const emit = defineEmits(['close'])
const closeModal = () => {
   emit('close')
}

const { $api } = useNuxtApp()

const updatePost = async () => {
   await $api.post.updatePost({
     id: props.post.id,
     title: title.value,
     content: content.value,
   })

  const updatePost = {
    id: props.post.id,
    title: title.value,
    content: content.value,
  }

  await updateThisPost(updatePost)

  emit('updatePost', updatePost)

  closeModal()
}

</script>

<template>
  <div :class="$style.updatePostContainer">
    <div :class="$style.updatePostContainerName">
      Редактирование поста
    </div>

    <div :class="$style.updatePostContainerChange">
      <div :class="$style.updatePostContainerChangeInput">
        <input :class="$style.changeInput" placeholder="Название поста"  v-model="title"/>
      </div>
      <div :class="$style.updatePostContainerChangeTextarea">
        <textarea rows="5" :class="$style.changeTextarea" placeholder="Содержание поста"  v-model="content"/>
      </div>
      <div :class="$style.updatePostContainerChangeButton">
        <button :class="$style.changeButton" @click="updatePost">Применить</button>
      </div>
    </div>
  </div>
</template>

<style module>
.updatePostContainer {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  border-radius: 12px;
  padding: 20px;

  input {
    all: unset;
  }
  textarea {
    all: unset;
  }
}

.updatePostContainerName {
  font-family: var(--primary-font);
  color: black;
}

.updatePostContainerChange {
  display: flex;
  flex-direction: column;
  gap: 10px
}

.updatePostContainerChangeInput {
  background-color: #777272;
  color: white;
  font-family: var(--primary-font);
  padding: 5px;
  border-radius: 12px;

  input {
    width: 100%;
  }
}

.changeInput::placeholder {
  color: white;
  font-family: var(--primary-font);
}

.updatePostContainerChangeTextarea {
  background-color: #777272;
  color: white;
  font-family: var(--primary-font);
  padding: 5px;
  border-radius: 12px;

  textarea {
    width: 100%;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-x: hidden;
    resize: vertical;
  }
}

.changeTextarea::placeholder {
  color: white;
  font-family: var(--primary-font);
}

.updatePostContainerChangeButton {
  display: flex;
  width: 100px;
  padding: 8px;
  border-radius: 12px;
  justify-content: center;
  background-color: #f66b10;
  cursor: pointer;
  align-self: center;
}

.changeButton {
  color: white;
  font-family: var(--primary-font);
  cursor: pointer;
}
</style>