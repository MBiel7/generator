export default {
  saveSelectedValue(state, payload) {
    state.selectedValues[payload.name] = payload.value;
  },
  setSelectedAnimationConfig (state, payload) {
    state.selectedAnimationConfig = payload
  },
}