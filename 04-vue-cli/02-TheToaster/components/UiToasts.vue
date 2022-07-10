<template>
  <div v-if="toasts" class="toasts">
    <!-- нужно ли использовать v-if в подобных случаях? или необязательно, также и в UiToast на span у меня v-if стоит -->
    <div v-for="toast in toasts" :key="toast.date" class="toast" :class="`toast_${toast.type}`">
      <ui-toast :text="toast.text" :type="toast.type"> </ui-toast>
    </div>
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
