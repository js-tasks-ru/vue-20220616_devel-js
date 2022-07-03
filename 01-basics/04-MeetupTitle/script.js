import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  data() {
    return {
      selection: null,
      title: null,
    };
  },
  watch: {
    async selection() {
      this.title = 'Подождите...';
      this.title = (await fetchMeetupById(this.selection)).title;
    },
  },
}).mount('#app');
