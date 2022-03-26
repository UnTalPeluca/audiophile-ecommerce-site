<template>
    <header 
        class="header absolute top-0 w-full border-b-2 border-white border-opacity-10 md:border-0"
        :style="{ backgroundColor: transparent ? 'none' : 'black' }"
    >
        <div class="header-container md:border-b-2 border-white border-opacity-10 py-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto w-11/12 flex justify-between items-center">
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