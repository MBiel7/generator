<template>
  <div>
    <label for="numericValue">{{ description }}</label>
    <input id="numericValue"
      type="number"
      :value.number="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    props: ['modelValue', 'description'],
    emits: ['update:modelValue'],
  }
</script>


<style>
input{
  float:right;
}
</style>
