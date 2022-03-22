<template>
    <footer class="footer w-full bg-footer text-center md:text-left text-white pb-10">
        <div class="footer-container max-w-sm md:max-w-md lg:max-w-lg w-11/12 flex flex-col items-center gap-y-12 mx-auto">
            <div class="footer__border-top border-t-orange w-24 sm:mx-auto md:mr-auto"></div>
            <div class="footer__content flex flex-col justify-center items-center gap-y-10 md:grid">
                <img src="~/assets/shared/desktop/logo.svg" alt="" class="footer__logo w-36">
                <ul class="footer__list font-bold tracking-wider text-sm flex flex-col md:flex-row md:gap-x-10 gap-y-4 lg:ml-auto">
                    <li class="list__item uppercase">
                        <NuxtLink to="/">home</NuxtLink>
                    </li>
                    <li class="list__item uppercase">
                        <NuxtLink to="/category/headphones">headphones</NuxtLink>
                    </li>
                    <li class="list__item uppercase">
                        <NuxtLink to="/category/speakers">speakers</NuxtLink>
                    </li>
                    <li class="list__item uppercase">
                        <NuxtLink to="/category/earphones">earphones</NuxtLink>
                    </li>
                </ul>
                <p class="footer__description text-white text-opacity-50 md:pb-10 lg:pb-4 text-md">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <bold class="footer__copyright text-white text-md text-opacity-50">Copyright 2021. All Rights Reserved</bold>
                <ul class="footer__rrss flex gap-x-4 md:ml-auto">
                    <li class="rrss__link">
                        <a href="/"><img src="@/assets/shared/desktop/icon-facebook.svg" alt=""></a>
                    </li>
                    <li class="rrss__link">
                        <a href="/"><img src="@/assets/shared/desktop/icon-twitter.svg" alt=""></a>
                    </li>
                    <li class="rrss__link">
                        <a href="/"><img src="@/assets/shared/desktop/icon-instagram.svg" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style>
.bg-footer {
    background-color: #101010;
}
.footer__content {
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto auto; 
    grid-template-areas: 
        "logo ."
        "list list"
        "description description"
        "copyright rrss"; 
}
.footer__logo { grid-area: logo; }
.footer__list { grid-area: list; }
.footer__description { grid-area: description; }
.footer__copyright { grid-area: copyright; }
.footer__rrss { grid-area: rrss; }
@media screen and (min-width: 900px) {
    .footer__content {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: auto auto auto; 
        grid-template-areas: 
            "logo list"
            "description rrss"
            "copyright ."; 
    }
}

</style>