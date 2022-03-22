<template>
    <div id="app">
        <Header :transparent="true"/>
        <Nuxt class="flex flex-col items-center"/>
        <Bio />
        <Footer />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    html {
        font-family: 'Manrope', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    img {
        max-height: 100%;
    }
    .bg-orange {
    background-color: #D87D4A;
    }
    .text-orange {
        color: #D87D4A;
    }
    .border-t-orange {
        border-top: 4px solid #D87D4A;
    }
    .new-product {
        letter-spacing: 0.5rem;
    }
</style>