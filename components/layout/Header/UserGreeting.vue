<template>
  <div :class="$style.userGreeting">
    <h1>Welcome, Sashastrit</h1>
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
    color: #575664;
  }
  p {
    margin: 0;
    color: #cdcdcd;
  }
}
</style>

//TODO: поменять обращение к тегу на класс везде
