<template>
    <section 
        class="categories flex flex-col md:flex-row gap-24 md:gap-2 lg:gap-8 justify-center"
    >
        <div 
            class="categories__item uppercase h-40 relative flex flex-col w-full gap-2 justify-end items-center bg-gray-100 rounded pb-6 lg:h-52 lg:pb-8"
            :style="{ order: category.order }"
            v-for="category in categories" :key="category.title"
        >
            <img 
                class="absolute bottom-14 lg:bottom-20"
                :src="require('~/static/categories/' + category.image)" 
            >
            <h2 class="font-bold text-center tracking-wide text-md lg:text-lg">{{ category.title }}</h2>
            <NuxtLink :to="'/category/' + category.title" class="text-gray-500 font-bold tracking-wide text-sm">shop ></NuxtLink>
        </div>
    </section>
</template>
<script>
import firebase from "~/services/firebaseServices"
export default {
    data:() => ({
        categories: []
    }),
    async fetch() {
        this.categories = await firebase.fetchCategories()
    }
}
</script>