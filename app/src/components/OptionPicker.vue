<template>
  <div>
    <label for="optionPicker">{{ description }}</label>
    <select id="optionPicker"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="option in options" :key="option.name" :value="option.name">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  props: [
    'modelValue',
    'options',
    'description',
  ],
  emits: ['update:modelValue'],
  data() {
    return {
      optionsLocal: this.options
    }
  },
}
</script>

<style>
select{
  float:right;
}
</style>