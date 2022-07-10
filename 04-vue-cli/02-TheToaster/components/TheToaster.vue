<template>
  <ui-toasts :toasts="toasts"></ui-toasts>
</template>

<script>
import UiToasts from './UiToasts.vue';

export default {
  name: 'TheToaster',

  components: { UiToasts },
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    success(message) {
      const elem = { type: 'success', text: message };
      this.toasts.push(elem);
      this.removeToast(elem);
    },
    error(message) {
      const elem = { type: 'error', text: message };
      this.toasts.push(elem);
      this.removeToast(elem);
    },
    removeToast(elem) {
      setTimeout(() => {
        this.toasts.splice(this.toasts.indexOf(elem), 1);
      }, 5000);
    },
  },
};
</script>

<style scoped></style>
