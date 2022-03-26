<template>
    <div class="category-page gap-14 lg:gap-32">
        <h1 class="page__title uppercase text-white text-center text-2xl md:text-5xl font-bold bg-black pt-32 pb-10 md:pt-44 md:pb-20 w-full">{{ title }}</h1>
        <div class="category max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto ">
            <section class="category__products flex flex-col gap-y-32 mb-40">
                <ProductsCardList :products="products"/>
            </section>
            <Categories />
        </div>
    </div>
</template>

<script>
import fb from "@/services/firebaseServices"
export default {
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
                message: "No se encontró esta categoria"
            })
        }
        return {
            title,
            products
        }
    }
}
</script>