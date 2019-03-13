<template>
  <div id="app">
    <header>
      <h1>
        <a href="http://poletika.org" target="_blank">
          <strong>candi-DATOS</strong> | Poletika.org
        </a>
      </h1>
      <p class="headline">
      Declaraciones candidatos <br/>Elecciones Generales 2019
      </p>
    </header>
    <filters
      :selected_topic="params.topic || ''"
      :selected_party="params.party || ''"
      @filter-party="filterParty"
      @filter-topic="filterTopic"
    />
    <div class="downloads">
      Descargar datos:
      <a href="http://data.what-politicians-say.poletika.org/csv/" target="_blank" download>CSV</a> |
      <a href="http://data.what-politicians-say.poletika.org/json/" target="_blank" download>JSON</a>
    </div>
    <listing
      :entries="filteredEntries"
      :loadedData="loadedData"
    />
  </div>
</template>

<script>
import axios from 'axios';
import listing from '../components/listing.vue';
import filters from '../components/filters.vue';

export default {
  name: 'app',
  components: {
    listing,
    filters,
  },

  data() {
    return {
      entries: [],
      selected_party: '',
      selected_topic: '',
      params: [],
      loadedData: 0,
    };
  },

  computed: {
    filteredEntries() {
      return this.entries.filter(entry => entry.topic.includes(this.selected_topic) && entry.party.includes(this.selected_party));
    },
  },

  methods: {
    filterParty(value) {
      this.selected_party = value;
    },

    filterTopic(value) {
      this.selected_topic = value;
    },
  },

  mounted() {
    const urlParams = window.location.hash.split('#');
    if (urlParams.length > 1) {
      urlParams[1].split('|').forEach((param) => {
        this.params[param.split(':')[0]] = decodeURIComponent(param.split(':')[1]);
      });

      this.selected_party = this.params.party || '';
      this.selected_topic = this.params.topic || '';
    }

    axios
      .get('//data.what-politicians-say.poletika.org/json/')
      .then((response) => {
        this.entries = response.data;
        this.loadedData = response.status;
      });
  },
};
</script>

<style lang="scss">
  $primary: #f54f4e;

  header {
    text-align: center;
  }

  .downloads {
    text-align: center;
    font-size: 0.85rem;
    margin-bottom: 1rem;

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
</style>
