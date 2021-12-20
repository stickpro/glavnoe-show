const actions = {
  async loadProfile({commit}, params) {
      const data = await this.$axios.$get(`users/${params.slug}.json`)
      console.log(data)
      commit('SET_PROFILE', data)
  }
}

export default actions
