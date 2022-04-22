<template>
    <div class="cart-buttons flex justify-around items-center bg-gray-100 w-24 p-1">
        <button @click="decreaseAmount()" class="font-bold text-black text-opacity-50 text-lg hover:text-orange"> - </button>
        <input ref="ref_input" v-bind="$attrs" class="w-4 bg-transparent text-center font-bold" readonly/>
        <button @click="increaseAmount()" class="font-bold text-black text-opacity-50 text-lg hover:text-orange"> + </button>
    </div>
</template>

<script>
export default {
    methods: {
        decreaseAmount() {
            const input = this.$refs.ref_input
            const value = parseInt(input.value)
            const result = value <= 1 ? 1 : value - 1
            this.$emit('input', result)
        },
        increaseAmount() {
            const input = this.$refs.ref_input
            const value = parseInt(input.value)
            const result = value + 1 
            this.$emit('input', result)
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
</style>