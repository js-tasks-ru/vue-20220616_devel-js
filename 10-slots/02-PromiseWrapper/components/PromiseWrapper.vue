<template>
  <slot v-if="promiseState === 'pending'" name="pending" />
  <slot v-else-if="promiseState === 'rejected'" :error="promiseError" name="rejected" />
  <slot v-else-if="promiseState === 'fulfilled'" name="fulfilled" :result="promiseLocal" />
</template>

<script>
export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },
  data() {
    return {
      promiseLocal: null,
      promiseState: null,
      promiseError: null,
    };
  },
  watch: {
    promise: {
      handler() {
        this.promiseState = 'pending';
        this.promise
          .then((res) => {
            this.promiseLocal = res;
            this.promiseState = 'fulfilled';
          })
          .catch((err) => {
            this.promiseError = err;
            this.promiseState = 'rejected';
          });
      },
      immediate: true,
    },
  },
};
</script>
