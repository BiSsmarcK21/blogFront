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
  font-family: Roboto,serif;
}

.headerRightSide {
  display: flex;
  gap: 20px;
}


</style>
