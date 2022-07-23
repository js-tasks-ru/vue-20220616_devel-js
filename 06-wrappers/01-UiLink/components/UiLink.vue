<template>
  <a v-if="tag === 'a'" class="link"><slot /></a>
  <router-link v-else class="link"><slot /></router-link>
</template>

<script>
export default {
  name: 'UiLink',
  props: {
    tag: {
      type: [String, Object],
      default: 'router-link',
    },
  },
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
