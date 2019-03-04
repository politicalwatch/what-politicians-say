<template>
  <div id="app">
    <filters />
    <listing :entries="entries" />
  </div>
</template>

<script>
import axios from 'axios';
import listing from './components/listing.vue';
import filters from './components/filters.vue';

export default {
  name: 'app',
  components: {
    listing,
    filters,
  },
  data() {
    return {
      entries: [],
    };
  },
  mounted() {
    axios
      .get('/data/data.json')
      .then((response) => {
        this.entries = response.data;
        return response.status;
      });
  },
};
</script>

<style lang="scss">

</style>
