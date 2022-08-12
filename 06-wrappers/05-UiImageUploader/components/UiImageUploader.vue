<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': isFileUpload }"
      :style="image && `--bg-url: url('${image}')`"
    >
      <span class="image-uploader__text">{{ uploaderText }}</span>
      <input
        ref="filePicker"
        v-bind="$attrs"
        type="file"
        accept="image/*"
        :disabled="isFileUpload"
        class="image-uploader__input"
        @change="selectFile"
        @click="removeFile"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  inheritAttrs: false,
  props: {
    preview: {
      default: null,
      type: String,
    },
    uploader: {
      default: null,
      type: Function,
    },
  },
  emits: ['remove', 'upload', 'select', 'error'],
  data() {
    return {
      isFileUpload: false,
      image: null,
    };
  },
  computed: {
    uploaderText() {
      if (this.image && !this.isFileUpload) return 'Удалить изображение';
      if (this.isFileUpload) return 'Загрузка...';
      return 'Загрузить изображение';
    },
  },
  created() {
    this.image = this.preview;
  },
  methods: {
    selectFile(event) {
      const file = event.target.files[0];
      this.image = URL.createObjectURL(file);
      if (this.uploader) {
        this.isFileUpload = true;
        this.uploader(file).then(
          (result) => {
            this.$emit('upload', result);
            this.isFileUpload = false;
          },
          (error) => {
            this.$emit('error', error);
            this.removeFile();
            this.isFileUpload = false;
          },
        );
      } else {
        this.$emit('select', file);
      }
    },
    removeFile() {
      this.$refs.filePicker.value = null;
      this.$emit('remove');
      this.image = null;
    },
  },
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
