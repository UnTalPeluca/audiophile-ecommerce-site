<template>
    <NuxtLink :to="to" class="see-product-button w-full p-4 uppercase mx-auto text-sm text-center font-bold tracking-widest block">see product</NuxtLink>
</template>

<script>
export default {
    props: {
        to:{
            type: String,
            default: "/"
        }
    }
}
</script>
<style>
.see-product-button{
    max-width: 10rem;
}
</style>