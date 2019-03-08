<template>
  <div id="app">
    <header>
      <a href="http://poletika.org" target="_blank">
        <img src="./assets/logo.png" alt="Poletika.org">
      </a>
      <p>Genera tu widget para insertarlo en tu sitio web:</p>
    </header>
    <filters
      @filter-party="filterParty"
      @filter-topic="filterTopic"
    />
    <textarea class="code-generator" @click="copyCode" readonly>
      <div id="poletika-widget" data-params="{{ activeFilter }}"></div>
      <script async src="//widget.what-politicians-say.poletika.org/embed.js"></script>
    </textarea>
    <p class="copied" v-show="this.copied">¡Texto copiado al portapapeles!</p>
  </div>
</template>

<script>
import axios from 'axios';
import { setTimeout } from 'timers';
import filters from './components/filters.vue';

export default {
  name: 'app',
  components: {
    filters,
  },

  data() {
    return {
      selected_party: '',
      selected_topic: '',
      copied: false,
    };
  },

  computed: {
    activeFilter() {
      const activeFilters = [];

      if (this.selected_topic.length) activeFilters.push(`topic:${this.selected_topic}`);
      if (this.selected_party.length) activeFilters.push(`party:${this.selected_party}`);

      return activeFilters.join('|');
    },

  },

  methods: {
    filterParty(value) {
      this.selected_party = value;
    },

    filterTopic(value) {
      this.selected_topic = value;
    },

    copyCode(event) {
      event.target.select();
      document.execCommand('copy');
      this.copied = true;

      setTimeout(function () { this.copied = false; }.bind(this), 2000);
    },
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
