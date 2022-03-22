<template>
    <div class="products__cards flex flex-col gap-y-24">
        <div 
            class="products__card text-center flex flex-col gap-y-6"
            v-for="( product, index ) in products" :key="index"
        >
            <picture class="">
                <source :srcset="require('~/static/products/' + product.categoryImage.desktop)" media="(min-width: 900px)">
                <source :srcset="require('~/static/products/' + product.categoryImage.tablet)" media="(min-width: 480px)">
                <source :srcset="require('~/static/products/' + product.categoryImage.mobile)">
                <img :src="require('~/static/products/' + product.categoryImage.mobile)" alt="" class="w-full">
            </picture>
            <small v-if="product.new" class="card__new new-product text-orange text-opacity-50 text-sm font-normal text-base uppercase">NEW PRODUCT</small>
            <h2 class="card__title text-2xl md:text-5xl font-bold uppercase tracking-wide md:w-6/12 md:mx-auto">{{ product.name }}</h2>
            <p class="card__description text-black text-opacity-50 text-md md:w-10/12 md:mx-auto">{{ product.description }}</p>
            <NuxtLink :to="'/product/' + product.slug" class="uppercase bg-orange w-40 p-4 mx-auto text-sm font-bold text-white tracking-widest">see product</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },
}
</script>