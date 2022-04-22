<template>
  <div class="home gap-16 md:gap-20 bg-gray-50">
    <div class="hero w-full pt-20 text-white">
      <div class="hero__content py-32 md:py-36 text-center flex flex-col gap-8 justify-center max-w-sm md:max-w-md lg:max-w-lg w-11/12 mx-auto lg:text-left">
        <div class="new-product tracking-xl text-white text-opacity-50 text-base font-normal uppercase">New Product</div>
        <h2 class="text-4xl tracking-wider md:text-6xl font-bold uppercase lg:w-5/12">xx99 mark ii headphones</h2>
        <p class="text-white text-opacity-75 leading-6 text-md md:w-6/12 md:mx-auto md:pb-6 lg:mx-0 lg:w-4/12 lg:pb-0">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <ButtonsSeeProduct to="/product/xx99-mark-two-headphones" class="bg-orange lg:mr-auto lg:ml-0 hover:bg-light-orange"/>
      </div>
    </div>
    <div class="pt-12 mx-auto max-w-sm md:max-w-md lg:max-w-lg w-11/12 flex flex-col gap-32">
      <ProductsCategories class="lg:pt-12"/>
      <section class="featured flex flex-col gap-4 md:gap-8 lg:gap-12 text-center">
        <!-- ZX9 SPEAKER  -->
        <article class="featured__item featured__item--grid-speaker bg-circles flex flex-col items-center gap-10 md:gap-20 bg-orange rounded-lg py-14 text-white lg:flex-row lg:overflow-hidden lg:py-10">
          <div class="item__image-container w-40 md:w-44 lg:w-full lg:relative lg:top-16 lg:w-auto lg:flex lg:pl-12">
            <picture class="item__image">
              <source srcset="@/assets/home/desktop/image-speaker-zx9.png" media="(min-width: 768px)">
              <source srcset="@/assets/home/tablet/image-speaker-zx9.png" media="(min-width: 480px)">
              <img src="@/assets/home/mobile/image-speaker-zx9.png" alt="ZX9 speaker product image" class="max-w-full lg:w-9/12 inline">
            </picture>
          </div>
          <div class="item__content flex flex-col gap-6 w-72 md:w-80 md:gap-8 lg:flex-auto lg:w-auto lg:pr-32 py-8">
            <h2 class="item__title uppercase text-4xl font-bold md:text-6xl lg:text-left">zx9<br>speaker</h2>
            <p class="item__description text-md lg:text-left">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <ButtonsSeeProduct to="/product/zx9-speaker" class="bg-black lg:ml-0 lg:mr-auto hover:bg-gray-600"/>
          </div>
        </article>
        <!-- ZX7 SPEAKER -->
        <article class="featured__item featured__item--bg-speaker py-24 px-6 md:pl-16 flex flex-col gap-10 items-start rounded-lg">
          <h2 class="item__title uppercase text-2xl font-bold">zx7 speaker</h2>   
          <ButtonsSeeProduct to="/product/zx7-speaker" class="bg-transparent ml-0 mr-auto border border-black hover:bg-black hover:text-white"/>
        </article>
        <!-- YX1 EARPHONES -->
        <article class="featured__item flex flex-col md:flex-row gap-4">
          <div class="item__image item__image--bg-earphones h-48 rounded-lg md:w-full md:h-80"></div>
          <div class="item__content-container h-48 flex flex-col gap-8 justify-center items-start px-6 bg-gray-100 rounded-lg md:w-full md:h-80 md:pl-14">
            <h2 class="item__title uppercase text-2xl font-bold">yx1 earphones</h2>
            <ButtonsSeeProduct to="/product/yx1-earphones" class="bg-transparent ml-0 mr-auto border border-black hover:bg-black hover:text-white"/>
          </div>
        </article>
      </section>
    </div>
    <Bio class="mt-12 mb-36 md:mt-0 md:mb-24 lg:mt-16 lg:mb-44"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Audiophile - Home'
    }
  },
  layout: 'home'
}
</script>

<style>
  .hero {
    background-image: url(@/assets/home/mobile/image-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 480px) {
    .hero {
      background-image: url(@/assets/home/tablet/image-header.jpg);
    }
    .bg-circles {
      background-size: 950px;
      background-position-y: -300px;
    }
    .featured__item--bg-speaker {
      background-image: url(@/assets/home/tablet/image-speaker-zx7.jpg);
      background-position: center;
    }
    .item__image--bg-earphones {
      background-image: url(@/assets/home/tablet/image-earphones-yx1.jpg);
    }
  }
  @media screen and (min-width: 768px) {
    .hero {
      background-image: url(@/assets/home/desktop/image-hero.jpg);
    }
    .featured__item--bg-speaker {
      background-image: url(@/assets/home/desktop/image-speaker-zx7.jpg);
    }
    .bg-circles {
      background-position-y: -10px;
      background-position-x: -150px;
    }
    .item__image--bg-earphones {
      background-image: url(@/assets/home/desktop/image-earphones-yx1.jpg);
    }
  }
</style>