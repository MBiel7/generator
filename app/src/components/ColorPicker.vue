<template>
  <div>
    <label for="colorPicker">{{ description }}</label>
    <input id="colorPicker"
      type="color"
      :value="modelValue"
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
