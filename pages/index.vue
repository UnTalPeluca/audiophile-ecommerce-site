<template>
  <div class="home gap-24">
    <div class="hero w-full pt-20 text-white">
      <div class="hero__content py-28 md:py-36 text-center flex flex-col gap-5 justify-center max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto">
        <div class="new-product text-white text-opacity-50 text-base font-normal uppercase">New Product</div>
        <h2 class="text-4xl md:text-6xl font-bold uppercase">xx99 mark ii headphones</h2>
        <p class="text-white text-opacity-75 leading-6 text-md md:w-6/12 md:mx-auto md:pb-6">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <SeeProductButton to="/product/xx99-mark-two-headphones" class="bg-orange"/>
      </div>
    </div>
    <div class="pt-12 mx-auto max-w-sm md:max-w-md lg:max-w-lg w-11/12 flex flex-col gap-32">
      <Categories />
      <section class="featured flex flex-col gap-4 text-center">
        <div class="featured__item bg-circles flex flex-col items-center gap-6 md:gap-26 bg-orange rounded-lg py-14 text-white">
          <picture class="w-40 md:w-44">
            <source srcset="@/assets/home/desktop/image-speaker-zx9.png" media="(min-width: 900px)">
            <source srcset="@/assets/home/tablet/image-speaker-zx9.png" media="(min-width: 480px)">
            <source srcset="@/assets/home/mobile/image-speaker-zx9.png">
            <img src="@/assets/home/mobile/image-speaker-zx9.png" alt="ZX9 speaker product image" class="w-full">
          </picture>
          <h2 class="item__title uppercase text-6xl font-bold w-72 pt-4">zx9<br>speaker</h2>
          <p class="item__description w-72 text-md">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <SeeProductButton to="/" class="bg-black"/>
        </div>
        <div class="featured__item featured__item--bg-speaker py-24 px-6 flex flex-col gap-10 items-start rounded-lg">
          <h2 class="item__title uppercase text-2xl font-bold">zx7 speaker</h2>   
          <SeeProductButton to="/" class="bg-transparent ml-0 mr-auto border border-black"/>
        </div>
        <div class="featured__item flex flex-col gap-4">
          <div class="item__image item__image--bg-earphones h-48 rounded-lg"></div>
          <div class="item__content-container h-48 flex flex-col gap-8 justify-center items-start px-6 bg-gray-100 rounded-lg">
            <h2 class="item__title uppercase text-2xl font-bold">yx1 earphones</h2>
            <SeeProductButton to="/" class="bg-transparent ml-0 mr-auto border border-black"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'home'
}
</script>

<style>
  .hero {
    background-image: url(@/assets/home/mobile/image-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bg-circles {
    background-image: url(@/assets/home/desktop/pattern-circles.svg);
    background-repeat: no-repeat;
    background-size: 550px;
    background-position: center -120px;
  }
  .featured__item--bg-speaker {
    background-image: url(@/assets/home/mobile/image-speaker-zx7.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: right;
  }
  .item__image--bg-earphones {
    background-image: url(@/assets/home/mobile/image-earphones-yx1.jpg);
    background-size: cover;
  }
  @media screen and (min-width: 480px) {
    .hero {
      background-image: url(@/assets/home/tablet/image-header.jpg)
    }
    .bg-circles {
      background-size: 1000px;
      background-position-y: -300px;
    }
    .freatured__item--bg-speaker {
      background-image: url(@/assets/home/tablet/image-speaker-zx7.jpg)
    }
  }
</style>