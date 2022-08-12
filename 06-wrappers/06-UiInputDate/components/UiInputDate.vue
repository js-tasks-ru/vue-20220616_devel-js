<template>
  <ui-input :value="dateValue" :type="type" @input="$emit('update:modelValue', $event.target.valueAsNumber)">
    <template v-for="slotName in Object.keys($slots)" #[slotName]> <slot :name="slotName" /> </template
  ></ui-input>
</template>

<script>
import UiInput from './UiInput';

export default {
  name: 'UiInputDate',

  components: { UiInput },
  props: {
    type: {
      type: String,
      default: 'date',
    },
    modelValue: {
      type: Number,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    dateValue() {
      return this.modelValue ? this.formattedDate : '';
    },
    formattedDate() {
      switch (this.type) {
        case 'datetime-local':
          return new Date(this.modelValue).toISOString().slice(0, 16);
        case 'time':
          return new Date(this.modelValue).toISOString().slice(11, 16);
        default:
          return new Date(this.modelValue).toISOString().slice(0, 10);
      }
    },
  },
};
</script>
