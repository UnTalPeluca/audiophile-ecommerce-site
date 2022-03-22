<template>
    <article class="bio max-w-sm md:max-w-md lg:max-w-lg w-11/12 text-center flex flex-col items-center mx-auto py-28 gap-y-8 lg:grid">
        <picture class="bio__image">
            <source srcset="@/assets/shared/desktop/image-best-gear.jpg" media="(min-width: 900px)">
            <source srcset="@/assets/shared/tablet/image-best-gear.jpg" media="(min-width: 480px)">
            <source srcset="@/assets/shared/mobile/image-best-gear.jpg">
            <img class="rounded-lg w-full" src="@/assets/shared/mobile/image-best-gear.jpg" alt="Bio image">
        </picture>
        <h2 class="bio__title uppercase font-bold tracking-wider text-2xl md:text-5xl md:w-10/12 lg:mt-auto">Bringing you the <strong class="text-orange">BEST</strong> audio gear</h2>
        <p class="bio__description text-black text-opacity-50 font-medium text-md md:w-10/12 lg:mb-auto">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </article>
</template>

<style scoped>
.bio {
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto; 
    grid-template-areas: 
        "title image"
        "description image"; 
}
.bio__title { grid-area: title; }
.bio__description { grid-area: description; }
.bio__image { grid-area: image; }
</style>