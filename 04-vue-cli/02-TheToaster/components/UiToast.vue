<template>
  <ui-icon class="toast__icon" :icon="toastIcon" />
  <span v-if="text">{{ text }}</span>
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
</style>
