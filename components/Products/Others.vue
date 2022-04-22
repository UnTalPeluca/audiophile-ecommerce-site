<template>
    <section class="other-product flex flex-col gap-10 md:gap-14">
        <h2 class="uppercase text-xl md:text-3xl font-bold text-center tracking-wide">you may also like</h2>
        <div class="product-container flex flex-col md:flex-row gap-10 md:gap-2 lg:gap-4">
            <div 
                class="product flex flex-col justify-between gap-6 md:gap-8"
                v-for="(product, index) in products" :key="index"
            >
                <picture>
                    <source :srcset="require('~/static/products/' + product.imageAlsoLike.desktop)" media="(min-width: 768px)">
                    <source :srcset="require('~/static/products/' + product.imageAlsoLike.tablet)" media="(min-width: 480px)">
                    <img :src="require('~/static/products/' + product.imageAlsoLike.mobile)" alt="" class="rounded-lg w-full">
                </picture>
                <h3 class="uppercase text-xl font-bold text-center">{{ product.nameShort }}</h3>
                <ButtonsSeeProduct :to="product.slug" class="bg-orange text-white hover:bg-light-orange"/>
            </div>
        </div>
    </section>
</template>
<script>
import firebase from "~/services/firebaseServices"
export default {
    props: {
        slugs: {
            type: Array,
            default: []
        }
    },
    data:() => ({
        products: []
    }),
    created() {
        const localProducts = []
        this.slugs.forEach(async (slug) => {
            const res = await firebase.fetchProductBySlug(slug)
            localProducts.push(res)
        })
        this.products = localProducts
    },
}
</script>