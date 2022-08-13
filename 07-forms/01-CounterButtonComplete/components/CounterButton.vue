<template>
  <button @click="increaseCount">{{ countValue }}</button>
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  data() {
    return {
      countValue: this.count,
    };
  },
  watch: {
    count() {
      this.countValue = this.count;
    },
  },
  methods: {
    increaseCount() {
      this.$emit('update:count', this.countValue + 1);
      this.countValue++;
    },
  },
};
</script>
