<template>
  <div class="filters">
    <div class="styled-select">
      <select name="areas" id="" @change="$emit('filter-area', $event.target.value)">
        <option value="">Todas las areas</option>
        <option
          v-for="(area, i) in areas"
          :key="i"
          :value="area">
            {{ area }}
        </option>
      </select>
    </div>

    <div class="styled-select">
      <select name="candidates" id="" @change="$emit('filter-candidate', $event.target.value)">
        <option value="">Todos los candidatos</option>
        <option
          v-for="(candidate, i) in candidates"
          :key="i"
          :value="candidate">
            {{ candidate }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filters',
  props: [
    'areas',
    'candidates',
  ]
};
</script>

<style lang="scss">
  $primary: #f54f4e;

  .filters {
    margin: 0 0 1rem 0;

    @media (min-width: 599px) {
      display: flex;
    }
  }

  .styled-select {
    border: 1px solid $primary;
    margin-bottom: 0.5rem;
    position: relative;
    width: 100%;
    overflow: hidden;

    @media (min-width: 599px) {
      margin: 0 0.5rem;
    }


    &:first-child {
      @media (min-width: 599px) {
        margin-left: 0;
      }
    }

    &:last-child {
      @media (min-width: 599px) {
        margin-right: 0;
      }
    }

    select {
      -webkit-appearance: none;
      border: 0;
      background: transparent;
      width: 105%;
      padding: 0.5rem;
      outline: none;
      font-size: 0.8rem;
    }

    &::after {
      content: "";
      display: block;
      width: 0.7rem;
      height: 0.7rem;
      border-right: 2px solid $primary;
      border-top: 2px solid $primary;
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: rotate(135deg) translateX(-100%);
      pointer-events: none;
    }
  }
</style>
