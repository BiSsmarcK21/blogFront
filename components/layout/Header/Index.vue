<template>
  <header :class="$style.header">
    <div>
      <LayoutHeaderUserGreeting />
    </div>

    <div :class="$style.headerRightSide">
      <LayoutHeaderSearchBar />
      <LayoutHeaderNotifications />
      <LayoutHeaderUserIcon />
    </div>
  </header>



</template>

<style module>
.header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  font-family: var(--primary-font);
}

.headerRightSide {
  display: flex;
  align-items: center;
  gap: 20px;
}

</style>
<script setup lang="ts">
</script>