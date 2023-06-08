<template>
  <div class="generator-main">
    <section class="workspace">
      <main-workspace>
      </main-workspace>
    </section>
    <section class="options">
      <div>Parametry szablonu</div>
      <single-option
        v-for="parameter in selectedAnimationConfig"
        :key="parameter.name"
        :parameter-content="parameter"
      >
      </single-option>
    </section>
  </div>
</template>

<script>
import {mapGetters } from 'vuex'
import SingleOption from '../components/SingleOption.vue'
import MainWorkspace from '../components/MainWorkspace.vue';

export default {
  name: 'GeneratorView',
  computed: {
    ...mapGetters('animationConfig', [
      'selectedAnimationConfig',
    ])
  },
  components: {
    SingleOption,
    MainWorkspace,
  }
}
</script>

<style scoped>
.generator-main{
  display: flex;
  height: 100vh;
}
.generator-main > section{
  flex-grow: 1;
  flex-shrink: 1;
  padding: 15px;
}
.workspace{
  width: auto;
  position: relative;
}
.options{
  background-color: #E0E0E0;
  max-width: 350px;
  min-width: 350px;
}
.options > div{
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 1em;
}
.options > div:first-child{
  font-size: 1.5em;
}
</style>