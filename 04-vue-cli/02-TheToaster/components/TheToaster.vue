<template>
  <div class="toasts">
    <div v-for="toast in toasts" :key="toast.date" class="toast" :class="`toast_${toast.type}`">
      <ui-toast :text="toast.text" :type="toast.type"> </ui-toast>
    </div>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiToast },
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

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
