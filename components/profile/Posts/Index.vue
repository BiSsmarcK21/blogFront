<script setup>
const { posts, isLoading } = usePostsState()

</script>

<template>
  <div :class="$style.ProfilePostsContainer">
    <div :class="$style.ProfilePostsContainerMenu">
      <div :class="$style.ProfilePostsContainerMenuContentActive">Posts</div>
      <div :class="$style.ProfilePostsContainerMenuContent">Friends</div>
      <div :class="$style.ProfilePostsContainerMenuContent">Photos</div>
      <div :class="$style.ProfilePostsContainerMenuContent">Videos</div>
      <div :class="$style.ProfilePostsContainerMenuContent">About</div>
    </div>
        <template v-if="!isLoading && posts && posts.length > 0">
          <div :class="$style.ProfilePostsContainerPosts" v-for="post in posts" :key="post.id">

            <ProfilePostsPostItem
                :post="post"
            />
          </div>
        </template>

        <div :class="$style.ProfilePostsContainerPostsNone" v-else-if="isLoading">
          <svg :class="$style.spinner" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="100px" height="100px" viewBox="0 0 50 50">
            <path d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"/>
          </svg>
        </div>

        <div :class="$style.ProfilePostsContainerPostsNone" v-else>
          На данный момент постов нет
        </div>
  </div>


</template>

<style module>
.spinner {
  animation: rotate 2s linear infinite; /* Анимация вращения */
}

@keyframes rotate {
  from {
    transform: rotate(0deg); /* Начальный угол */
  }
  to {
    transform: rotate(360deg); /* Конечный угол */
  }
}

.ProfilePostsContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ProfilePostsContainerMenu {
  display: flex;
  width: 100%;
}

.ProfilePostsContainerMenuContent {
  flex: 1;
  text-align: center;
  padding: 20px;
  border-bottom: 2px #f6f6f6 solid;
  color: var(--primary-color-marengo);
  cursor: pointer;
}

/*Временно*/

.ProfilePostsContainerMenuContentActive {
  flex: 1;
  text-align: center;
  padding: 20px;
  border-bottom: 2px #e7c0a5 solid;
  color: #f2d7b2;
  cursor: pointer;
}

.ProfilePostsContainerPosts {
  background-color: #f9f9f9;
  border-radius: 12px;
}

.ProfilePostsContainerPostsNone {
  align-self: center;
  padding: 10px;
  font-family: var(--primary-font);
}

</style>