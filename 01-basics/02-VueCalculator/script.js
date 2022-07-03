import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      firstNumber: null,
      secondNumber: null,
      operation: null,
    };
  },
  computed: {
    total() {
      if (this.operation === 'sum') return this.firstNumber + this.secondNumber;
      else if (this.operation === 'subtract') return this.firstNumber - this.secondNumber;
      else if (this.operation === 'multiply') return this.firstNumber * this.secondNumber;
      else if (this.operation === 'divide') return this.firstNumber / this.secondNumber;
      else return null;
    },
  },
}).mount('#app');
