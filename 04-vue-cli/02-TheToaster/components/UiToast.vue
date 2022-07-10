<template>
  <ui-icon class="toast__icon" :icon="type === 'success' ? 'check-circle' : 'alert-circle'" />
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
};
</script>

<style scoped>
.toast__icon {
  margin-right: 12px;
}
</style>
