
<template>
  <div :class="$style.profileContent">

    <div :class="[$style.profileContentUser, $style.profileContentContainerGap]">
      <div :class="$style.profileContentContainer">
        <ProfileUserInformation />
      </div>
    </div>

    <div :class="[$style.profileContentAbout, $style.profileContentContainerGap]">
      <div :class="$style.profileContentContainer">
        <ProfileAboutUser />
      </div>
    </div>

    <div :class="[$style.profileContentPosts, $style.profileContentContainerGap]">
        <ProfilePosts />
    </div>

    <div :class="[$style.profileContentPhotos, $style.profileContentContainerGap]">
      <div :class="$style.profileContentContainer">
        <ProfileUserPhotos />
      </div>
    </div>

  </div>


</template>

<style module>
.profileContent {
  display: grid;
  grid-template-areas:
      'user about'
      'posts photos';
  grid-template-columns: auto 500px;
  gap: 50px;
  width: 100%;
  align-items: stretch;
}

.profileContentContainerGap {
  gap: 50px;
}

.profileContentUser {
  grid-area: user;
}

.profileContentAbout {
  grid-area: about;
}

.profileContentPosts {
  grid-area: posts;
  height: 100%;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
}

.profileContentPhotos {
  grid-area: photos;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
}

.profileContentContainer {
  height: 100%;
}
</style>
