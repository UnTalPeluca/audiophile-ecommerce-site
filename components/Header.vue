<template>
    <header 
        class="header absolute top-0 w-full border-b-2 border-white border-opacity-10 md:border-0 z-10"
        :style="{ backgroundColor: transparent ? '' : 'black' }"
        ref="ref-header"
    >
        <div class="header-container md:border-b-2 border-white border-opacity-10 py-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto w-11/12 flex justify-between items-center">
            <nav class="header__navbar lg:order-2">
                <img @click="setMenuState(!isMenuOpen)" id="hamburger" src="~/assets/shared/tablet/icon-hamburger.svg" alt="" class="header__hamburger cursor-pointer lg:hidden">
                <div
                    id="menu"
                    v-show="isMenuOpen" 
                    class="navbar__categories-mobile focus:outline-none absolute w-full bg-gray-50 left-0 pt-20 pb-8 top-22 rounded-b-lg lg:hidden"
                >
                    <ProductsCategories class="mx-auto max-w-sm md:max-w-md lg:max-w-lg"/>
                </div>
                <ul class="navbar__list hidden gap-x-8 lg:flex text-white font-bold text-sm">
                    <li class="list__item hover:text-orange tracking-widest">
                        <NuxtLink to="/">HOME</NuxtLink>
                    </li>
                    <li class="list__item hover:text-orange tracking-widest">
                        <NuxtLink to="/category/headphones">HEADPHONES</NuxtLink>
                    </li>
                    <li class="list__item hover:text-orange tracking-widest">
                        <NuxtLink to="/category/speakers">SPEAKERS</NuxtLink>
                    </li>
                    <li class="list__item hover:text-orange tracking-widest">
                        <NuxtLink to="/category/earphones">EARPHONES</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="header__logo md:mr-auto md:pl-8 lg:p-0 lg:order-1 lg:mr-0 lg:w-2/12">
                <NuxtLink to="/"><img src="~/assets/shared/desktop/logo.svg" alt="" class="logo__img"></NuxtLink>
            </div>
            
                <div class="header__cart lg:order-3 lg:w-2/12 lg:flex lg:justify-end relative">
                    <div class="cart__icon relative">
                        <img @click="setCartState(!isCartOpen)" id="cartIcon" src="~/assets/shared/desktop/icon-cart.svg" alt="" class="cart__icon cursor-pointer">
                        <client-only>
                            <div v-if="getCartDetails.length" class="absolute bottom-2 left-4 rounded-full bg-orange w-4 h-4 text-center aling-center flex justify-center items-center text-white text-xs"><b>{{getCartDetails.length}}</b></div>
                        </client-only>
                    </div>
                    <client-only>
                        <CartInteract
                            id="cart"
                            v-show="isCartOpen" 
                        />
                    </client-only>
                </div>
            
        </div>
    </header>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    props: {
        transparent: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        ...mapState('layout', ['isMenuOpen','isCartOpen']),
        ...mapGetters('cart', ['getCartDetails']),
    },
    methods: {
        ...mapMutations('layout', {setMenuState: 'SET_MENU_STATE', setCartState: 'SET_CART_STATE'}),
    },
    created() {
        if(process.client) {
            let that = this
            document.addEventListener('click', (e) => {
                let cart = document.getElementById('cart')
                let menu = document.getElementById('menu')
                let hamburger = document.getElementById('hamburger')
                let cartIcon = document.getElementById('cartIcon')
                if(!cart.contains(e.target) && e.target !== cart && e.target !== cartIcon) {
                    that.setCartState(false)
                }
                if(!menu.contains(e.target) && e.target !== menu && e.target !== hamburger) {
                    that.setMenuState(false)
                }
            })
        }
    }
}
</script>
<style scoped>

</style>