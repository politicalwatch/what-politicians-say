<template>
  <div class="filters">
    <select name="areas" id="" @change="$emit('filter-area', $event.target.value)">
      <option value="">Todas las areas</option>
      <option
        v-for="(area, i) in areas"
        :key="i"
        :value="area">
          {{ area }}
      </option>
    </select>

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

<style scoped lang="scss">
</style>
