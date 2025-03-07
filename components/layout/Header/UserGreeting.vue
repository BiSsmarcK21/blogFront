<template>
  <div :class="$style.userGreeting">
    <h1>Welcome, Test</h1>
    <p>27.02.2025</p>
  </div>
</template>

<style module>
.userGreeting {
  display: flex;
  flex-direction: column;
  gap: 15px;
  h1 {
    font-size: 24px;
    margin: 0;
    color: var(--primary-color-marengo);
  }
  p {
    margin: 0;
    color: var(--primary-color-lightTelegray);
  }
}
</style>
