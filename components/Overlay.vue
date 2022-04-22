<template>
    <div class="overlays">
        <div v-show="isMenuOpen" class="menu-overlay w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 lg:hidden"></div>
        <div v-show="isCartOpen" class="cart-overlay w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50"></div>
        <div v-show="isOrderCompleted" class="complete-overlay w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('layout', ['isMenuOpen', 'isCartOpen', 'isOrderCompleted'])
    }
}
</script>