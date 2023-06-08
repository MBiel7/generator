<template>
  <prepared-html
    :preparedHtml="preparedHtml"
    :preparedScript="preparedScript"
    :key="refreshCounter"
  >
  </prepared-html>
  <button class="GenerateButton" @click="buttonAction">Generate</button>
</template>

<script>
import PreparedHtml from './PreparedHtml.vue';
import {mapGetters, mapActions } from 'vuex';
import dummyScript from '../assets/dummyScript.js?raw';
import dummyHtml from '../assets/dummyHtml.html?raw';

export default {
  data() {
    return {
      preparedHtml: null,
      preparedScript: null,
      refreshCounter: 0,
    }
  },
  components: {
    PreparedHtml,
  },
  computed: {
    ...mapGetters('animationConfig', [
      'selectedAnimationConfig',
      'selectedValueByName',
    ])
  },
  methods: {
    ...mapActions('animationConfig', [
      'loadSelectedAnimationConfig',
    ]),
    buttonAction() {

      this.preparedHtml = dummyHtml;
      this.preparedScript = dummyScript;


      this.selectedAnimationConfig.forEach(parameter => {
        let value = this.selectedValueByName(parameter.name)

        if (parameter.type == 'options' && value) {
          let selectedtOption = parameter.options.find(option => option.name == value)
          selectedtOption.variables.forEach(variable => {
            this.preparedHtml = this.preparedHtml.replace(`{${variable.variable}}`, variable.value)
            this.preparedScript = this.preparedScript.replace(`{${variable.variable}}`, variable.value)
          })
        } else if(value) {
          console.log(value)
          this.preparedHtml = this.preparedHtml.replace(`{${parameter.variable}}`, value)
          this.preparedScript = this.preparedScript.replace(`{${parameter.variable}}`, value)
        }
        
      })
      this.refreshCounter++;
    },
  },
  created() {
    this.loadSelectedAnimationConfig()
  },
}
</script>

<style scoped>
.GenerateButton {
  background-color: #1F81B9;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 1.5em;
  border-radius: 5px;
  cursor: pointer;
  position:absolute;
  bottom: 20px;
  right: 20px;
}
</style>