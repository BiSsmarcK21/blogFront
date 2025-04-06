<script setup>
  const props = defineProps ({
    post: Object
  })

const { $api } = useNuxtApp()
const { deletePost: deleteThisPost } = usePostsState()
const deletePost = async (id) => {
  $api.post.deletePost({
    id
  })
  deleteThisPost(id)
}

const isModalOpen = ref(false)
const openModal = () => {
    isModalOpen.value = true
    console.log(props.post)
}

const closeModal = () => {
    isModalOpen.value = false
}

const updatePost = (updatePost) => {
    props.post.title = updatePost.title
    props.post.content = updatePost.content
}
</script>

<template>
  <div :class="$style.postItemContainer">
    <div :class="$style.postItemContainerInfo">
      <div :class="$style.postItemContainerInfoAboutUser">
        <div>
          <img :class="$style.postItemContainerInfoPhoto" src="/public/images/iticon.png" alt="not found">
        </div>
        <div :class="$style.postItemContainerInfoUser">Александр П.</div>
      </div>


      <div>
        <svg width="30px" height="30px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Upload-1">
              <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24">

              </rect>
              <line x1="12" y1="11" x2="12" y2="20" id="Path" stroke="#d7d7d7" stroke-width="2" stroke-linecap="round">

              </line>
              <path d="M15,13 L12.7071,10.7071 C12.3166,10.3166 11.6834,10.3166 11.2929,10.7071 L9,13" id="Path" stroke="#d7d7d7" stroke-width="2" stroke-linecap="round">

              </path>
              <path d="M8,16 L6,16 C4.34315,16 3,14.6569 3,13 C3,11.3431 4.34315,10 6,10 C6,6.68629 8.68629,4 12,4 C15.3137,4 18,6.68629 18,10 C19.6569,10 21,11.3431 21,13 C21,14.6569 19.6569,16 18,16 L16,16" id="Path"
                    stroke="#d7d7d7" stroke-width="2" stroke-linecap="round">

              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>
      <div :class="$style.postItemContainerPost">
        <div :class="$style.postItemContainerPostTitle">
          {{ post.title }}
        </div>

        <div :class="$style.postItemContainerPostContent">
          {{ post.content }}
        </div>
      </div>

      <div :class="$style.postItemContainerActions">
        <div>
          <button type="button" :class="$style.postItemContainerActionsButton" @click="deletePost(post.id)">Удалить</button>
        </div>
        <div>
          <button :class="$style.postItemContainerActionsButton" @click="openModal">Редактировать</button>
        </div>


          <modal  :isOpen="isModalOpen" @close="closeModal">
            <FormsUpdatePost v-if="post" :post="post" @close="closeModal" @updatePost="updatePost"/>
          </modal>

      </div>
  </div>
</template>

<style module>
.postItemContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.postItemContainerInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.postItemContainerPost {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.postItemContainerPostTitle {
  font-family: var(--primary-font);
  color: var(--primary-color-marengo);
  font-size: 20px;
  border-bottom: 1px #cdcdcd solid;
  padding-bottom: 5px;
}

.postItemContainerPostContent {
  font-family: var(--primary-font);
  color: var(--primary-color-marengo);

}

.postItemContainerInfoAboutUser {
  display: flex;
  gap: 20px;
  align-items: center;
}

.postItemContainerInfoPhoto {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.postItemContainerInfoUser {
  font-family: var(--primary-font);
}

.postItemContainerActions {
  display: flex;
  gap: 10px;
  justify-content: end;
}

.postItemContainerActionsButton {
  padding: 8px 16px 8px 16px;
  background-color: #f46b0f;
  color: white;
  font-family: var(--primary-font);
  border-radius: 12px;
  align-self: center;
  cursor: pointer;
}
</style>