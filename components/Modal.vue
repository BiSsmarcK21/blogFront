<script setup>
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    }
  })

  const emit = defineEmits(["close"])
  const closeModal = () => {
    emit("close")
  }
</script>

<template>
  <div :class="$style.modal" v-if="isOpen" @click="closeModal">
    <div :class="$style.modalContent" @click.stop>
      <span :class="$style.close" @click="closeModal">&times</span>
      <slot  />
    </div>

  </div>
</template>

<style module>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  padding: 20px;
  width: 400px;
  position: relative;

}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

.close:hover {
  color: #000
}
</style>