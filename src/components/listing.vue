<template>
  <div class="listing-wrapper">
    <ul class="listing">
      <li v-for="entry in entries" :key="entry">
        <strong>{{ entry.candidate }}</strong> dijo <i>{{ entry.statement }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listing',
  props: {
    entries: [],
  },
};
</script>

<style scoped lang="scss">
</style>
