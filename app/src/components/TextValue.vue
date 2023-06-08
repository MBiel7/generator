<template>
  <div>
    <label for="textValue">{{ description }}</label>
    <input id="textValue"
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
