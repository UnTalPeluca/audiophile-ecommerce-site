import firebase from "~/services/firebaseServices"
import formatter from "~/utils/formatPrice"
export const state = () => ({
    cartList: [],
    productsData: [],
    showCart: true,
    poto:'como',
    order: []
})

export const mutations = {
    ADD_PRODUCT(state, { amount, index }) {
        state.cartList[index].amount += amount
        localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    ADD_NEW_PRODUCT(state, product) {
        state.cartList.push(product)
        localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    REM_PRODUCT(state, { amount, index }) {
        state.cartList[index].amount -= amount
        localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    REM_PRODUCT_FROM_CART(state, index) {
        state.cartList.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    REM_ALL_PRODUCTS(state) {
        state.cartList = []
        localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    SET_CART_VISIBILITY(state, value) {
        state.showCart = value
    },
    ADD_PRODUCT_DATA(state, value) {
        state.productsData.push(value)
    },
    SET_CART(state, cart) {
        state.cartList = cart
    },
    SET_ORDER(state) {
        state.order = state.cartList
        state.cartList = []
        localStorage.setItem('cart', JSON.stringify(state.cartList))
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
    },
    loadCartFromLocalStorage({ commit, dispatch }, storage) {
        commit('SET_CART', storage)
        storage.forEach(item => {
            dispatch('fetchProductData', item.slug)
        })
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
    getOrderDetails: (state) => {
        const result = []
        state.order.forEach(item => {
            let itemData = state.productsData.find(product => product.slug === item.slug)
            result.push({ data: itemData, amount: item.amount })
        })
        return result
    },
}