<template>
    <header 
        class="header py-8 border-b-2 border-white border-opacity-10 absolute top-0 w-full"
        :style="{ backgroundColor: transparent ? 'none' : 'black', border: transparent ? '' : 'none' }"
    >
        <div class="header-container max-w-sm md:max-w-md lg:max-w-lg mx-auto w-11/12 flex justify-between items-center">
            <nav class="header__navbar">
                <img src="~/assets/shared/tablet/icon-hamburger.svg" alt="" class="header__hamburger">
                <ul class="navbar__list">
                    <li class="list__item">
                        
                    </li>
                </ul>
            </nav>
            <div class="header__logo md:mr-auto md:pl-8">
                <NuxtLink to="/"><img src="~/assets/shared/desktop/logo.svg" alt="" class="logo__img"></NuxtLink>
            </div>
            <div class="header__cart">
                <img src="~/assets/shared/desktop/icon-cart.svg" alt="" class="cart__icon">
            </div>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        transparent: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>

</style>