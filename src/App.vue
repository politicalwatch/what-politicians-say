<template>
  <div id="app">
    <filters
      :areas="areas"
      :candidates="candidates"
      @filter-candidate="filterCandidate"
      @filter-area="filterArea"
    />
    <listing
      :entries="entries"
    />
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
      selected_candidate: '',
      selected_area: '',
    };
  },

  computed: {

    areas() {
      return [...new Set(this.entries.map(entry => entry.area))];;
    },

    candidates() {
      return [...new Set(this.entries.map(entry => entry.candidate))];;
    },
  },

  methods: {
    filterCandidate(value) {
      console.log('filtrando candidato', value);
      this.selected_candidate = value;
    },

    filterArea(value) {
      console.log('filtrando area', value);
      this.selected_area = value;
    },

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
