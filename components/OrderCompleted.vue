<template>
    <div id="orderCompleted" class="order-completed absolute top-0 w-screen left-0 z-50">
        <div v-if="isOrderCompleted" class="wrapper mx-auto fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-sm rounded-lg p-6 flex flex-col gap-4 md:w-11/12 md:max-w-540">
            <div class="checkmark_circle bg-orange h-12 w-12 rounded-full grid place-items-center">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125" stroke="white" stroke-width="4"/></svg>
            </div>
            <b class="text-xl tracking-wider md:text-3xl md:pt-4">THANK YOU <br> FOR YOUR ORDER</b>
            <p class="font-medium text-black text-opacity-50 md:pb-4 md:pt-2">You will receive an email confirmation shortly.</p>
            <div class="sumary flex flex-col md:flex-row">
                <div v-if="seeMore" class="summary-wrapper flex flex-col gap-2 bg-gray-100 p-4 rounded-t-lg w-full md:rounded-tr-none md:rounded-bl-lg">
                    <div
                        v-for="(item, index) in cart" :key="index"
                        class="sumary__item"
                    >
                        <div class="item__wrapper flex justify-between">
                            <CartItemSummary :itemData="item.data"/>
                            <b class="pt-2 text-black text-opacity-50 text-base">x{{ item.amount }}</b>
                        </div>
                    </div>
                    <button v-if="cart.length > 1" @click="seeMore = !seeMore" class="mx-auto w-full text-black text-opacity-50 font-bold text-xs pt-4 border-t hover:text-orange">View less</button>
                </div>
                <div v-else class="summary-wrapper bg-gray-100 rounded-t-lg p-4 w-full md:rounded-tr-none md:rounded-bl-lg">
                    <div v-if="showOneItem" class="summary flex justify-between pb-2">
                        <CartItemSummary :itemData="cart[0].data"/>
                        <b class="pt-2.5 text-base text-black text-opacity-50">x{{ cart[0].amount }}</b>
                    </div>
                    <button v-if="cart.length > 1" @click="seeMore = !seeMore" class="mx-auto w-full text-black text-opacity-50 font-bold text-xs pt-4 border-t hover:text-orange">and {{ cart.length - 1 }} other items(s)</button>
                </div>
                <div class="total bg-black px-6 py-4 flex flex-col justify-center gap-2 rounded-b-lg w-full md:rounded-bl-none md:rounded-tr-lg md:justify-end md:pb-10">
                    <p class="total__title text-white text-opacity-50 font-medium text-base">GRAND TOTAL</p>
                    <b class="total__price text-white text-lg ">{{ totalPrice }}</b>
                </div>
            </div>
            <div @click="setVisibility(false)" class="button-wrapper md:pt-6 md:pb-4">
                <NuxtLink to="/" class="w-full p-4 uppercase mx-auto text-sm text-center text-white font-bold tracking-widest block bg-orange hover:bg-light-orange">BACK TO HOME</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import formatter from '~/utils/formatPrice'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    data: () => ({
        seeMore: false,
        formatter
    }),
    methods: {
        ...mapMutations('layout', { setVisibility: 'SET_ORDER_COMPLETED_STATE' })
    },
    computed: {
        ...mapGetters('cart', { cart:'getOrderDetails' }),
        ...mapState('layout', ['isOrderCompleted']),
        showOneItem() {
            const product = this.cart[0]
            if(product === undefined) {
                return false
            } else if (!product.hasOwnProperty('data')){
                return false
            } else {
                return true
            }
        },
        totalPrice() {
            let result = 0
            if(this.cart[0]?.data?.price) {
                this.cart.forEach( item => {
                    result += item.data?.price * item?.amount
                })
            }
            return this.formatter.format(result + 50)
        }
    },
}
</script>

<style scoped>

</style>