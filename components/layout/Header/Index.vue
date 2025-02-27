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
  display: flex;
  justify-content: space-between;
}

.headerRightSide {
  display: flex;
}

.headerRightSideItems {
  margin
}
</style>
