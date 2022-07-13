<template>
  <div class="toast" :class="`toast_${type}`">
    <ui-icon class="toast__icon" :icon="toastIcon" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToast',

  components: { UiIcon },
  props: {
    text: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    toastIcon() {
      return this.type === 'success' ? 'check-circle' : 'alert-circle';
    },
  },
};
</script>

<style scoped>
.toast__icon {
  margin-right: 12px;
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
