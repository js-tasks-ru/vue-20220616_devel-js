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
      this.toasts.push({ type: 'success', text: message, date: Date.now() });
      this.removeToast();
    },
    error(message) {
      this.toasts.push({ type: 'error', text: message, date: Date.now() });
      this.removeToast();
    },
    removeToast() {
      setTimeout(() => {
        const time = Date.now();
        this.toasts = this.toasts.filter((item) => !(time - item.date + 50 > 5000));
      }, 5000);
    },
  },
};
</script>

<style scoped></style>
