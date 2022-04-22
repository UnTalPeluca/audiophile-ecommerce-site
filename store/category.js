import firebase from "~/services/firebaseServices"

export const state = () => ({
    categories: '',
})

export const mutations = {
    SET_CATEGORIES(state, value) {
        state.categories = value
    }
}

export const actions = {
    async fetchCategories({commit, state}) {
        if(state.categories.length == 0) {
            const result = await firebase.fetchCategories()
            commit('SET_CATEGORIES', result)
        }
    },
}