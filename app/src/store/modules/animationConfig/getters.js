export default {
  selectedAnimationConfig: state => state.selectedAnimationConfig,
  selectedValueByName: (state) => (name) => {return state.selectedValues[name]},
}