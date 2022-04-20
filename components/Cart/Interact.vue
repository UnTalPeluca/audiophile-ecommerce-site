<template>
    <div 
        class="cart absolute top-28 left-1/2 transform -translate-x-2/4 w-full max-w-sm">
        <div class="cart__content bg-white p-6 grid rounded-lg">
            <b class="content__title tracking-widest">CART({{ getCartDetails.length }})</b>
            <button @click="cleanCart()" class="content__remove-btn ml-auto underline text-gray-500 text-md hover:text-orange ">Remove all</button>
            <div v-if="getCartDetails.length" class="content__items flex flex-col gap-6">
                <div
                    v-for="(item, index) in getCartDetails" :key="index"
                    class="item flex justify-between items-center"
                >
                    <CartItemSummary v-if="item.data" :itemData="item.data"/>
                    <CartAmountButton v-if="item.data" v-model="item.amount" :slug="item.data.slug" :index="index"/>
                </div>
            </div>
            <div v-else class="content__items font-bold">Cart is empty</div>
            <div class="content__total flex items-center">
                <p class="text-gray-500 text-base font-medium tracking-wider">TOTAL</p>
                <b class="ml-auto text-lg">{{ totalPrice }}</b>
            </div>
            <NuxtLink to="/checkout" class="checkout w-full p-4 uppercase mx-auto text-sm text-center text-white font-bold tracking-widest block bg-orange">CHECKOUT</NuxtLink>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatter from "~/utils/formatPrice"

export default {
    data: () => ({
        formatter
    }),
    computed: {
        ...mapGetters("cart", [
            "getCartDetails",
        ]),
        totalPrice() {
            let result = 0
            if(this.getCartDetails[0]?.data?.price) {
                this.getCartDetails.forEach( item => {
                    result += item.data?.price * item?.amount
                })
            }
            return this.formatter.format(result)
        }
    },
    methods: {
        cleanCart() {
            this.$store.dispatch('cart/removeProductFromCart', { clean: true })
        }
    }
}
</script>
<style scoped>
    a.nuxt-link-exact-active {
        color: white!important
    }
    .cart__content {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: auto auto auto; 
        gap: 24px 0px; 
        grid-template-areas: 
            "title remove-btn"
            "items items"
            "total total"
            "checkout checkout"; 
    }
    .content__title { grid-area: title; }
    .content__remove-btn { grid-area: remove-btn; }
    .content__items { grid-area: items; }
    .content__total { grid-area: total; }
    .checkout { grid-area: checkout; }
</style>