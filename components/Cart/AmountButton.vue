<template>
    <div class="cart-buttons flex justify-around items-center bg-gray-100 w-24 p-1">
        <button @click="decreaseAmount()" class="font-bold text-black text-opacity-50 text-sm hover:text-orange"> - </button>
        <input ref="ref_input" v-bind="$attrs" class="w-4 bg-transparent text-center font-bold" readonly/>
        <button @click="increaseAmount()" class="font-bold text-black text-opacity-50 text-sm hover:text-orange"> + </button>
    </div>
</template>

<script>
export default {
    props: {
        index: Number,
        slug: String,
    },
    methods: {
        decreaseAmount() {
            this.$store.dispatch('cart/removeProductFromCart', { slug: this.slug, index: this.index, amount: 1 })
        },
        increaseAmount() {
            this.$store.dispatch('cart/addProductToCart', { slug: this.slug, index: this.index, amount: 1 })
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
</style>