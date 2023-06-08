import axios from 'axios'

export default {
  saveSelectedValue: ({ commit }, payload) => {
    commit('saveSelectedValue', payload)
  },
  async loadSelectedAnimationConfig ({ commit }) {
    const config = {
      headers:{
        "Access-Control-Allow-Origin": "*",
      }
    };
    
    const template = await axios.get('http://127.0.0.1:3000/templates/6473b641a43002bd69824a0c', config)
    commit('setSelectedAnimationConfig', template.data.configuration)
  }
}