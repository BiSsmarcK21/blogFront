<template>
  <div :class="$style.userPhotosContainer">

    <div :class="$style.userPhotosContainerName">
      Photos
    </div>

    <div :class="$style.userPhotosContainerGridArea">
      <div :class="$style.userPhotosContainerGridAreaItems">
        <img src="/public/images/iticon.png" alt="not found">
      </div>
      <div :class="$style.userPhotosContainerGridAreaItems">
        <img src="/public/images/iticon.png" alt="not found">
      </div>
      <div :class="$style.userPhotosContainerGridAreaItems">
        <img src="/public/images/iticon.png" alt="not found">
      </div>
      <div :class="$style.userPhotosContainerGridAreaItems">
        <img src="/public/images/iticon.png" alt="not found">
      </div>

    </div>

  </div>
</template>

<style module>
.userPhotosContainer {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.userPhotosContainerName {
font-family: var(--primary-font);
}

.userPhotosContainerGridArea {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin: 0 auto;
}

.userPhotosContainerGridAreaItems {
  img {
    width: 100px;
    height: 100px;
    border-radius: 12px;
  }
}
</style>
<script setup lang="ts">
</script>