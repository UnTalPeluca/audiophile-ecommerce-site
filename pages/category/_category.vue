<template>
    <div class="category-page bg-gray-50 gap-14 lg:gap-32">
        <h1 class="page__title uppercase text-white text-center text-2xl md:text-5xl font-bold bg-black pt-32 pb-10 md:pt-44 md:pb-20 w-full">{{ title }}</h1>
        <div class="category max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto ">
            <section class="category__products flex flex-col gap-y-32 mb-40">
                <ProductsCardList :products="products"/>
            </section>
            <ProductsCategories />
        </div>
        <Bio />
    </div>
</template>

<script>
import fb from "@/services/firebaseServices"
export default {
    head() {
        return {
            title: `Audiophile - ${ this.title.charAt(0).toUpperCase() + this.title.slice(1) }`
        }
    },
    async asyncData({ params, error }) {
        const categories = await fb.fetchCategories()
        const isValidCategory = categories.hasOwnProperty(params.category)
        let title
        let products
        if(isValidCategory) {
            title = params.category
            products = await fb.fetchProductsByCategory(params.category)
        } else {
            error({
                statusCode: 404,
                message: "This category was not found"
            })
        }
        return {
            title,
            products
        }
    }
}
</script>