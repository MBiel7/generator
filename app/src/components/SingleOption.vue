<template>
  <div>
    <color-picker
      v-if="parameterContent.type == 'colorPicker'"
      v-model="selectedValue"
      :description="parameterContent.description"
    >
    </color-picker>
    <option-picker
      v-else-if="parameterContent.type == 'options'"
      v-model="selectedValue"
      :options="parameterContent.options"
      :description="parameterContent.description"
    >
    </option-picker>
    <numeric-value
      v-else-if="parameterContent.type == 'numeric'"
      v-model="selectedValue"
      :description="parameterContent.description"
    >
    </numeric-value>
    <text-value
      v-else-if="parameterContent.type == 'text'"
      v-model="selectedValue"
      :description="parameterContent.description"
    >
    </text-value>
    <import-image
      v-else-if="parameterContent.type == 'importImage'"
      v-model="selectedValue"
      :description="parameterContent.description"
    >
    </import-image>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker.vue'
import OptionPicker from './OptionPicker.vue'
import NumericValue from './NumericValue.vue'
import TextValue from './TextValue.vue'
import ImportImage from './ImportImage.vue'


import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SingleOption',
  props: {
    parameterContent: Object
  },
  components: {
    ColorPicker,
    OptionPicker,
    NumericValue,
    TextValue,
    ImportImage,
  },
  data() {
    return {
      selectedValue: null,
    }
  },
  computed: {
    ...mapGetters('animationConfig', [
      'selectedValueByName',
    ])
  },
  methods: {
    ...mapActions('animationConfig', [
      'saveSelectedValue',
    ]),
  },
  created() {
    this.selectedValue = this.selectedValueByName(this.parameterContent.name) ?? this.parameterContent.defaultValue
    if (!this.selectedValue && this.parameterContent.type == 'options') {
      let defaultOption = this.parameterContent.options.find(option => option.isDefault)
      this.selectedValue = defaultOption.name
    }
  },
  mounted() {
    
  },
  watch: {
    selectedValue(newValue, oldValue) {
      if(!newValue) return
      this.saveSelectedValue({name: this.parameterContent.name, value: newValue})
    }
  },
}
</script>


<style>

</style>
