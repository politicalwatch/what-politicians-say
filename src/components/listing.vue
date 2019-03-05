<template>
  <div class="listing-wrapper">
    <ul class="listing">
      <li class="listing__item" v-for="(entry, i) in entries" :key="i">
        <p class="listing__author"><strong>{{ entry.candidate }}</strong> <time>el {{ entry.date }}</time></p>
        <blockquote class="listing__quote"><a target="_blank" :href="entry.source">{{ entry.statement }}</a></blockquote>
        <div class="listing__meta">
          <div class="listing__place">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f54f4e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg> {{ entry.place }}
          </div>
          <div class="listing__area">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f54f4e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            {{ entry.area }}
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
  },
};
</script>

<style lang="scss">
  $primary: #f54f4e;

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
      font-weight: bold;

      a {
        text-decoration: none;
        color: $primary;
        transition: all 0.3s ease-in;

        &:hover {
          opacity: 0.8;
          text-decoration: underline;
        }
      }
    }

    &__meta {
      margin: 0 -1rem -1rem -1rem;
      background: rgba($primary, 0.1);
      padding: 1rem 1rem 0.5rem 1rem;
      font-size: 0.75rem;

      svg {
        vertical-align: text-bottom;
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
