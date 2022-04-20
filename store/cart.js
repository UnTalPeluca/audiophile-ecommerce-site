import firebase from "~/services/firebaseServices"
import formatter from "~/utils/formatPrice"
export const state = () => ({
    cartList: [],
    productsData: [],
    showCart: true,
    poto:'como'
})

export const mutations = {
    ADD_PRODUCT(state, { amount, index }) {
        state.cartList[index].amount += amount
    },
    ADD_NEW_PRODUCT(state, product) {
        state.cartList.push(product)
    },
    REM_PRODUCT(state, { amount, index }) {
        state.cartList[index].amount -= amount
    },
    REM_PRODUCT_FROM_CART(state, index) {
        state.cartList.splice(index, 1)
    },
    REM_ALL_PRODUCTS(state) {
        state.cartList = []
    },
    SET_CART_VISIBILITY(state, value) {
        state.showCart = value
    },
    ADD_PRODUCT_DATA(state, value) {
        state.productsData.push(value)
    }
}

export const actions = {
    addProductToCart({ commit, state, dispatch }, { slug, amount, index }) {
        if(index) {
            commit('ADD_PRODUCT', { amount: amount, index:index })
            dispatch('fetchProductData', slug)
        } else {
            const foundIndex = state.cartList.findIndex(p => p.slug === slug)
            if (foundIndex !== -1) {
                commit('ADD_PRODUCT', { amount: amount, index:foundIndex })
                dispatch('fetchProductData', slug)     
            } else {
                commit('ADD_NEW_PRODUCT', { slug:slug, amount:amount })
                dispatch('fetchProductData', slug)
            }
        }
    },
    removeProductFromCart({ commit, state }, { amount, index, clean }) {
        if(clean) {
            commit('REM_ALL_PRODUCTS')
        } else {
            if( (state.cartList[index].amount - amount) === 0 ) {
                commit('REM_PRODUCT_FROM_CART', { index })
            } else {
                commit('REM_PRODUCT', { amount, index })
            }
        }
    },
    async fetchProductData({ commit, state }, slug ) {
        const exist = state.productsData.find(p => p.slug === slug)
        if(!exist) {
            const result = await firebase.fetchProductBySlug(slug)
            commit('ADD_PRODUCT_DATA', result)
        }
    }
}
export const getters = {
    getCartDetails: (state) => {
        const result = []
        state.cartList.forEach(item => {
            let itemData = state.productsData.find(product => product.slug === item.slug)
            result.push({ data: itemData, amount: item.amount })
        })
        return result
    },
}