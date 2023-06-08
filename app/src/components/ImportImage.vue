<template>
  <div>
    <label>{{ description }}</label>
    <input id="uploadImage"
      type="file"
      accept="image/*"
      @change="uploadImage"
    />
    
  </div>
</template>

<script>
  export default {
    props: ['modelValue', 'description'],
    emits: ['update:modelValue'],
    methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        console.log(event.target.result)
        this.$emit('update:modelValue', event.target.result)
      };

      // this.$emit('update:modelValue', $event.target.value)
    }
  }
  }
</script>


<style>
input{
  float:right;
}
</style>
