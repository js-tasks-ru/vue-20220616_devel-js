import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      total: 0,
      firstNumber: null,
      secondNumber: null,
      operation: null,
    };
  },
  watch: {
    operation() {
      switch (this.operation) {
        case 'sum':
          this.total = this.firstNumber + this.secondNumber;
          break;
        case 'subtract':
          this.total = this.firstNumber - this.secondNumber;
          break;
        case 'multiply':
          this.total = this.firstNumber * this.secondNumber;
          break;
        case 'divide':
          this.total = this.firstNumber / this.secondNumber;
          break;
      }
    },
  },
}).mount('#app');
