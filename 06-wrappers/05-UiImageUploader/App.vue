<template>
  <div id="app" class="sample container">
    <ui-image-uploader
      :preview="image"
      :uploader="uploadImage"
      @remove="image = undefined"
      @upload="image = $event.image"
      @select="selectFile"
    />
  </div>
</template>

<script>
import UiImageUploader from './components/UiImageUploader';
import { uploadImage } from './ImageService';

export default {
  name: 'App',

  components: { UiImageUploader },

  data() {
    return {
      image: 'https://course-vue.javascript.ru/api/images/1',
      uploadImage,
    };
  },
  methods: {
    selectFile(file) {
      this.image = URL.createObjectURL(file);
    },
  },
};
</script>

<style>
@import '@/assets/styles/_container.css';
</style>
