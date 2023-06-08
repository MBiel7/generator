<template>
  <div v-html="preparedHtml" id="preparedHtml"></div>
</template>

<script>
export default {
  props: ['preparedHtml','preparedScript'],
  data() {
    return {
      scriptElement: null,
    }
  },
  mounted () {
    let divScripts = document.getElementById('preparedHtml');
    let newScript = document.createElement('script');
    newScript.innerHTML = this.preparedScript;
    this.scriptElement = divScripts.appendChild(newScript);
  },
  beforeUnmount() {
    let divScripts = document.getElementById('preparedHtml');
    divScripts.removeChild(this.scriptElement);
  }
}
</script>