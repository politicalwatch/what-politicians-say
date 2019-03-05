<template>
  <div id="app">
    <header>
      <a href="http://poletika.org" target="_blank">
        <img src="./assets/logo.png" alt="Poletika.org">
      </a>
    </header>
    <filters
      :areas="areas"
      :candidates="candidates"
      :selected_area="params.area || ''"
      :selected_candidate="params.candidate || ''"
      @filter-candidate="filterCandidate"
      @filter-area="filterArea"
    />
    <h4 class="loading" v-if="!filteredEntries.length">Cargando datos</h4>
    <listing
      :entries="filteredEntries"
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
      params: [],
    };
  },

  computed: {

    areas() {
      return [...new Set(this.entries.map(entry => entry.area))];;
    },

    candidates() {
      return [...new Set(this.entries.map(entry => entry.candidate))];;
    },

    filteredEntries() {
      return this.entries.filter(entry => entry.area.includes(this.selected_area) && entry.candidate.includes(this.selected_candidate))
    },
  },

  methods: {
    filterCandidate(value) {
      this.selected_candidate = value;
    },

    filterArea(value) {
      this.selected_area = value;
    },
  },

  mounted() {
    let urlParams = window.location.hash.split('#');
    if (urlParams.length > 1) {
      urlParams[1].split('|').forEach((param) => {
        this.params[param.split(':')[0]] = decodeURIComponent(param.split(':')[1]);
      });

      this.selected_candidate = this.params.candidate || '';
      this.selected_area = this.params.area || '';
    }

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
  $primary: #f54f4e;

  header {
    text-align: center;
  }

  .loading {
    text-align: center;
    font-style: italic;
    color: $primary;
  }
</style>
