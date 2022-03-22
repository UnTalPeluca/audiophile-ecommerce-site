<template>
    <div class="product-page gap-6 pt-28 max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto">
        <NuxtLink 
            :to="'/category/' + product.category"
            class="text-black text-opacity-50 mr-auto font-medium"
        >Go Back</NuxtLink>
        <div class="product-page-container flex flex-col gap-24">
            <section class="product flex flex-col gap-20">
                <div class="product__summary flex flex-col gap-6 md:flex-row">
                    <picture class="rounded">
                        <source :srcset="require('~/static/products/' + product.image.desktop)" media="(min-width: 900px)">
                        <source :srcset="require('~/static/products/' + product.image.tablet)" media="(min-width: 480px)">
                        <source :srcset="require('~/static/products/' + product.image.mobile)">
                        <img :src="require('~/static/products/' + product.image.mobile)" alt="">
                    </picture>
                    <div class="summary__content flex flex-col gap-6 md:max-w-sm md:justify-center ">
                        <small v-if="product.new" class="card__new new-product text-orange text-opacity-50 text-xs font-normal uppercase">NEW PRODUCT</small>
                        <h1 class="product__title text-2xl font-bold uppercase ">{{ product.name }}</h1>
                        <p class="text-black text-opacity-50 font-medium text-md">{{ product.description }}</p>
                        <b class="text-black text-lg">$ {{ product.price.toLocaleString() }}</b>
                        <div class="product__cart-buttons flex gap-4">
                            <CartAmountButton />
                            <CartAddButton />
                        </div>
                    </div>
                </div>
                <div class="product__description flex flex-col gap-20">
                    <div class="description__features flex flex-col gap-6">
                        <h2 class="uppercase text-xl md:text-3xl font-bold tracking-wide">features</h2>
                        <p class="text-black text-opacity-50 font-medium text-md">{{ product.features }}</p>
                    </div>
                    <div class="content flex flex-col md:flex-row md:justify-between gap-6">
                        <h2 class="uppercase text-xl md:text-3xl font-bold tracking-wide md:w-1/2">in the box</h2>
                        <ul class="md:w-1/2 flex flex-col gap-2 text-md">
                            <li 
                                v-for="(item, index) in product.includes" :key="index"
                                class="flex gap-6"
                            >
                                <b class="text-orange">{{ item.quantity }}x</b>
                                <span class="text-black text-opacity-50 font-medium">{{ item.item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="product__gallery flex flex-col gap-5 lg:gap-8">
                    <picture 
                        v-for="(image, index) in product.gallery" :key="index"
                        :style="{ order: orderSchema[index] }"
                        :class="gridSchema[orderSchema[index]]"
                    >
                        <source :srcset="require('~/static/products/' + image.desktop)" media="(min-width: 900px)">
                        <source :srcset="require('~/static/products/' + image.tablet)" media="(min-width: 480px)">
                        <source :srcset="require('~/static/products/' + image.mobile)">
                        <img :src="require('~/static/products/' + image.mobile)" alt="" class="rounded-lg w-full">
                    </picture>
                </div>
            </section>
            <section>
                <OtherProducts :slugs="product.others"/>
            </section>
            <Categories class="mt-24"/>
        </div>
    </div>
</template>
<script>
import fb from "~/services/firebaseServices"

export default {
    data:() => ({
        orderSchema: {
            first: '0',
            second: '1',
            third: '2'
        },
        gridSchema: ['img-small1', 'img-small2', 'img-big']
    }),
    async asyncData({ params }) {
        const product = await fb.fetchProductBySlug(params.product)
        return {
            product
        }
    }
}
</script>
<style scoped>
@media screen and (min-width: 480px) {
.product__gallery {
    display: grid; 
    grid-template-columns: auto 57.275%; 
    grid-template-rows: auto auto;
    justify-content: space-between; 
    grid-template-areas: 
        "img-small1 img-big"
        "img-small2 img-big"; 
}
.product__summary picture {
    max-height: 480px;
    max-width: 100%;
}
.img-small1 { grid-area: img-small1; }
.img-small2 { grid-area: img-small2; }
.img-big { grid-area: img-big; }
}
</style>