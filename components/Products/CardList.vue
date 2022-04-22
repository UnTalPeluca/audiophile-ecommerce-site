<template>
    <div class="products__cards flex flex-col gap-y-24 lg:gap-y-36">
        <figure 
            class="products__card text-center flex flex-col gap-y-8 lg:flex-row lg:gap-x-10 lg:items-center"
            v-for="( product, index ) in products" :key="index"
        >
            <picture class="lg:w-1/2 rounded-lg overflow-hidden">
                <source :srcset="require('~/static/products/' + product.categoryImage.desktop)" media="(min-width: 768px)">
                <source :srcset="require('~/static/products/' + product.categoryImage.tablet)" media="(min-width: 480px)">
                <source :srcset="require('~/static/products/' + product.categoryImage.mobile)">
                <img :src="require('~/static/products/' + product.categoryImage.mobile)" alt="" class="w-full">
            </picture>
            <div class="card__content flex flex-col gap-6 lg:text-left lg:w-1/2">
                <small v-if="product.new" class="card__new new-product text-orange text-opacity-50 text-sm font-normal text-base uppercase tracking-xl">NEW PRODUCT</small>
                <h2 class="card__title text-2xl md:text-5xl font-bold uppercase tracking-wide md:w-6/12 md:mx-auto lg:mx-0 lg:w-auto">{{ product.name }}</h2>
                <p class="card__description text-black text-opacity-50 text-md font-medium md:w-10/12 md:mx-auto lg:mx-0 lg:py-4">{{ product.description }}</p>
                <NuxtLink :to="'/product/' + product.slug" class="uppercase bg-orange w-40 p-4 mx-auto text-sm font-bold text-white tracking-widest hover:bg-light-orange lg:mx-0 lg:text-center">see product</NuxtLink>
            </div>
        </figure>
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
<style scoped>
@media screen and (min-width:768px) {
    .products__card:nth-child(even){
    flex-direction: row-reverse;
    }
    .products__card:nth-child(odd) .card__content{
        padding-left: 25px;
    }
}
</style>