<template>
  <div id="app">
    <header>
      <a href="http://poletika.org" target="_blank">
        <img src="../assets/logo.png" alt="Poletika.org">
      </a>
      <p>Genera tu widget para insertarlo en tu sitio web:</p>
    </header>
    <filters
      :areas="areas"
      :candidates="candidates"
      selected_area=""
      selected_candidate=""
      @filter-candidate="filterCandidate"
      @filter-area="filterArea"
    />
    <textarea class="code-generator" @click="copyCode" readonly>
      // eslint-disable-next-line
      <div id="poletika-widget" data-params="{{activeFilter}}"></div>
      <script async src="http://localhost:8081/widget.js"></script>
    </textarea>
    <p class="copied" v-show="this.copied">¡Texto copiado al portapapeles!</p>
  </div>
</template>

<script>
import axios from 'axios';
import { setTimeout } from 'timers';
import filters from '../components/filters.vue';

export default {
  name: 'app',
  components: {
    filters,
  },

  data() {
    return {
      entries: [],
      selected_candidate: '',
      selected_area: '',
      copied: false,
    };
  },

  computed: {
    areas() {
      return [...new Set(this.entries.map(entry => entry.area))];
    },

    candidates() {
      return [...new Set(this.entries.map(entry => entry.candidate))];
    },

    activeFilter() {
      const activeFilters = [];

      if (this.selected_area.length) activeFilters.push(`area:${this.selected_area}`);
      if (this.selected_candidate.length) activeFilters.push(`candidate:${this.selected_candidate}`);

      return activeFilters.join('|');
    },

  },

  methods: {
    filterCandidate(value) {
      this.selected_candidate = value;
    },

    filterArea(value) {
      this.selected_area = value;
    },

    copyCode(event) {
      event.target.select();
      document.execCommand('copy');
      this.copied = true;

      setTimeout(function copied() { this.copied = false; }, 2000);
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
  $primary: #f54f4e;

  header {
    text-align: center;
  }

  .code-generator {
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    height: 4.5rem;
    padding: 1rem;
    font-size: 0.8rem;
    resize: none;
  }

  .copied {
    font-size: 0.75rem;
    font-style: italic;
    color: $primary;
    text-align: center;
  }
</style>
