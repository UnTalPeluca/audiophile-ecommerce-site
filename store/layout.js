export const state = () => ({
    isMenuOpen: false,
    isCartOpen: false,
    isOrderCompleted: false,
    headerTransparent: false
})

export const mutations = {
    SET_MENU_STATE(state, value) {
        state.isMenuOpen = value
    },
    SET_CART_STATE(state, value) {
        state.isCartOpen = value
    },
    SET_ORDER_COMPLETED_STATE(state, value) {
        state.isOrderCompleted = value
    }
}