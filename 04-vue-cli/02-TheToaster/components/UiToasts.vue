<template>
  <div class="toasts">
    <ui-toast v-for="toast in toasts" :key="toast.date" :text="toast.text" :type="toast.type"> </ui-toast>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'UiToasts',

  components: { UiToast },
  props: {
    toasts: {
      type: Array,
      required: true,
      default: null,
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
