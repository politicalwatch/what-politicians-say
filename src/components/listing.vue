<template>
  <div class="listing-wrapper">
    <h4 class="loading" v-if="!entries.length && !loadedData">Cargando datos</h4>
    <h4 class="loading" v-if="!entries.length && loadedData">Aún no hay declaraciones registradas durante la campaña. <br>
      Entra en <a href="http://www.poletika.org">www.poletika.org</a> y ayúdanos a pedir un compromiso público al respecto</h4>
    <ul class="listing">
      <li class="listing__item" v-for="(entry, i) in entries" :key="i">
        <p class="listing__author">
          <strong>{{ entry.candidate }}</strong> <time>el {{ entry.date }}</time>
        </p>
        <blockquote class="listing__quote">
          "{{ entry.statement }}"
        </blockquote>
        <div class="listing__meta">
          <div class="listing__place">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f54f4e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            <a target="_blank" :href="entry.source">Fuente</a>
          </div>
          <div class="listing__area">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f54f4e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            {{ entry.topic }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f54f4e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
            {{ entry.proposal }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listing',
  props: {
    entries: Array,
    loadedData: Number,
  },
};
</script>

<style lang="scss">
  $primary: #f54f4e;

  .loading {
    text-align: center;
    font-style: italic;
    color: $primary;
  }

  .listing {
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      box-shadow: 0 0 1rem rgba(0,0,0,0.1);
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid rgba($primary, 0.2);
    }

    &__author {
      margin: 0 0 1rem 0;

      strong {
        margin-right: 0.5rem;
      }

      time {
        font-style: italic;
        font-size: 0.75rem;
      }
    }

    &__quote {
      padding: 0;
      margin: 0 0 1rem 0;
      line-height: 1.4;
    }

    &__meta {
      margin: 0 -1rem -1rem -1rem;
      background: rgba($primary, 0.05);
      padding: 1rem 1rem 0.5rem 1rem;
      font-size: 0.75rem;

      @media (min-width: 599px) {
        display: flex;
        justify-content: space-between;
      }

      svg {
        vertical-align: text-bottom;
        margin-right: 0.5rem;
      }
    }

    &__place {
      margin-bottom: 0.5rem;
    }

    &__area {
      margin-bottom: 0.5rem;
    }

  }
</style>
