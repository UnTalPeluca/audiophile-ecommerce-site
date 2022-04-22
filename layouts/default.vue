<template>
    <div id="app">
        <Header />
        <Nuxt class="flex flex-col items-center"/>
        <Overlay />
        <OrderCompleted />
        <Footer />
    </div>
</template>
<script>
export default {
    created() {
        if (process.client) {
            const storage = JSON.parse(localStorage.getItem('cart'))
            if(storage) {
                this.$store.dispatch('cart/loadCartFromLocalStorage', storage)
            } else {
                localStorage.setItem('cart', '[]')
            }
        }
    },
}
</script>
<style lang="css">
    html {
        font-family: 'Manrope', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    img {
        max-height: 100%;
    }
    a.nuxt-link-exact-active {
        color: #D87D4A
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>