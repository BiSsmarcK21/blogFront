<script setup>

const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>
<template>

  <div :class="$style.userInformationContainer">
    <div :class="$style.userInformationContainerBackground">
      <img :class="$style.userInformationBackgroundImageSetup" src="/public/images/dark.jpg" alt="not found">
    </div>
    <div :class="$style.userInformationContainerContent">
      <div :class="$style.contentBlock">
        <img :class="$style.userInformationBackgroundIconSetup" src="/public/images/icon.jpg" alt="not found">
      </div>
      <div :class="$style.contentBlock">
        <div :class="$style.aboutUser">
          <div :class="$style.aboutUserName">Прибылов Александр Ильич</div>
          <div :class="$style.aboutUserStatus">Future full-stack programming, танкист... </div>
          <div :class="$style.aboutUserLocation">
            <div>
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   width="25px" height="25px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
              <path fill="#231F20" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
              </svg>
            </div>
            <div :class="$style.aboutUserLocationText">Москва</div>
          </div>
        </div>
        <div :class="$style.aboutUserButton" class="hoverActions" @click="openModal">
          <button :class="$style.aboutUserButtonText" class="hoverActions" @click="openModal">Create post</button>

          <Modal :isOpen="isModalOpen" @close="closeModal">
            <FormsCreatePost @close="closeModal" />
          </Modal>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.userInformationContainer {
  display: flex;
/*  width: 100%;*/
  position: relative;
  overflow: hidden;
  background: white;
  border-radius: 12px;
  height: 100%;
  padding: 10px;
}

.userInformationContainerBackground {
  position: absolute; /* Фон будет занимать всю область */
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1; /* Фон будет позади контента */
}

.userInformationBackgroundImageSetup {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Растягиваем изображение на весь фон */
}

.userInformationBackgroundIconSetup {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.userInformationContainerContent {
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: relative;
  gap: 30px;
}

.contentBlock {
  color: white;
  display: flex;
  justify-content: space-between;
}

.aboutUser {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.aboutUserName {
  font-family: var(--primary-font);
  color: var(--primary-color-marengo);
}

.aboutUserStatus {
  font-family: var(--primary-font);
  color: var(--primary-color-marengo);
}

.aboutUserButton {
  align-self: center;
  background-color: #f46b0f;
  padding: 10px 30px 10px 30px;
  border-radius: 12px;
}

.aboutUserButtonText {
  font-family: var(--primary-font);
  color: white;
}

.aboutUserLocation {
  display: flex;
  gap: 5px;
  align-items: center;
}

.aboutUserLocationText {
  font-family: var(--primary-font);
  color: var(--primary-color-marengo);
}
</style>