<template>
  <div class="filters">
    <div class="styled-select" :class="{ 'is-disabled' : selected_topic }">
      <select
        name="areas"
        @change="$emit('filter-topic', $event.target.value)"
      >
        <option value="">Todas las temáticas</option>
        <option value="Calidad democrática" :selected="'Calidad democrática'===selected_topic">Calidad democrática</option>
        <option value="Cambio climático" :selected="'Cambio climático'===selected_topic">Cambio climático</option>
        <option value="Conflictos y migración" :selected="'Conflictos y migración'===selected_topic">Conflictos y migración</option>
        <option value="Desarrollo" :selected="'Desarrollo'===selected_topic">Desarrollo</option>
        <option value="Educación" :selected="'Educación'===selected_topic">Educación</option>
        <option value="Empleo" :selected="'Empleo'===selected_topic">Empleo</option>
        <option value="Fiscalidad" :selected="'Fiscalidad'===selected_topic">Fiscalidad</option>
        <option value="Género" :selected="'Género'===selected_topic">Género</option>
        <option value="Infancia" :selected="'Infancia'===selected_topic">Infancia</option>
        <option value="Protección social" :selected="'Protección social'===selected_topic">Protección social</option>
        <option value="Sanidad" :selected="'Sanidad'===selected_topic">Sanidad</option>
      </select>
    </div>

    <div class="styled-select" :class="{ 'is-disabled' : selected_party }">
      <select
        name="candidates"
        @change="$emit('filter-party', $event.target.value)"
      >
        <option value="">Todos los candidatos</option>
        <option value="Partido Popular" :selected="'Partido Popular'===selected_party">Pablo Casado</option>
        <option value="Partido Socialista" :selected="'Partido Socialista'===selected_party">Pedro Sánchez</option>
        <option value="Unidas Podemos" :selected="'Unidas Podemos'===selected_party">Pablo Iglesias / Irene Montero</option>
        <option value="Ciudadanos" :selected="'Ciudadanos'===selected_party">Albert Rivera</option>
        <option value="Vox" :selected="'Vox'===selected_party">Santiago Abascal</option>
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
    'selected_topic',
    'selected_party',
  ],
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

    &.is-disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
</style>
