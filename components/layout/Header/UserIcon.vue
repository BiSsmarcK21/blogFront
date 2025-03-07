<template>
  <div :class="$style.userIcon">
      <img class="hoverActions" width="50px" height="52px" src="/public/images/iticon.png" alt="not found">
  </div>
</template>

<style module>
.userIcon {
  height: 52px;
  width: 50px;
  border-radius: 12px;
  justify-content: center;
  display: flex;
  align-items: center;
  img {
    border-radius: 12px;
  }
}
</style>
<script setup lang="ts">
</script>