<script setup>
const { pushPost } = usePostsState()

  const title = ref()
  const content =  ref()

  const emit = defineEmits(["close"])
  const closeModal = () => {
    emit("close")
  }
  const { $api } = useNuxtApp()
  const createPost = async () => {
    await $api.post.createPost({
      title: title.value,
      content: content.value,
    });
    pushPost({
      title: title.value,
      content: content.value,
    })

    closeModal()
    title.value = ''
    content.value = ''
  }


</script>

<template>
  <div :class="$style.createPostContainer">
    <div :class="$style.createPostContainerName">
      Добавить пост
    </div>

    <div :class="$style.createPostContainerCreation">
      <div :class="$style.createPostContainerCreationTitle">
        <input :class="$style.creationTitleInput" placeholder="Название поста" v-model="title"/>
      </div>
      <div :class="$style.createPostContainerCreationContent">
        <textarea type="text" rows="5" :class="$style.creationContentTextarea" placeholder="Содержание поста" v-model="content"/>
      </div>
      <div :class="$style.createPostContainerCreationButton">
        <button :class="$style.creationButton" type="button" @click="createPost" >Создать пост</button>
      </div>
    </div>
  </div>
</template>

<style module>


.createPostContainer {
  width: 100%;
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

.createPostContainerName {
  font-family: var(--primary-font);
  color: black;
}

.createPostContainerCreation{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.createPostContainerCreationTitle {
  font-family: var(--primary-font);
  color: white;
  background: gray;
  padding: 5px;
  border-radius: 12px;

  input {
    width: 100%;
  }
}

.createPostContainerCreationContent {
  font-family: var(--primary-font);
  color: white;
  background: gray;
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

.creationTitleInput::placeholder {
  color: white;
}

.creationContentTextarea::placeholder {
  color: white;
}

.createPostContainerCreationButton {
  display: flex;
  width: 100px;
  padding: 8px;
  border-radius: 12px;
  justify-content: center;
  background-color: #f66b10;
  cursor: pointer;
  align-self: center;
}

.creationButton {
  color: white;
  font-family: var(--primary-font);
  cursor: pointer;
}
</style>