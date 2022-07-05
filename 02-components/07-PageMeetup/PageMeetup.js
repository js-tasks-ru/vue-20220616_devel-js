import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService';
import MeetupView from './components/MeetupView';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      meetup: null,
      error: null,
    };
  },
  watch: {
    meetupId() {
      this.getMeetup();
    },
  },
  created() {
    this.getMeetup();
  },
  methods: {
    async getMeetup() {
      try {
        this.meetup = undefined;
        this.meetup = await fetchMeetupById(this.meetupId);
      } catch (e) {
        this.meetup = null;
        this.error = e.message;
      }
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view :meetup="meetup" v-if="meetup"></meetup-view>

      <ui-container v-else-if="meetup === undefined">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if="error">
        <ui-alert >{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
