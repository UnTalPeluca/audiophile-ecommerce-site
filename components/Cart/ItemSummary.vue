<template>
    <div v-if="itemData" class="flex justify-between gap-4">
        <div class="item__image w-16">
            <img :src="require('~/static/products/' + itemData.image.mobile)" alt="" class="rounded-lg w-full">
        </div>
        <div class="item__details flex flex-col justify-center">
            <b class="title uppercase text-md">{{ itemData.nameCart }}</b>
            <b class="price text-black text-base text-opacity-50">{{ formatter.format(itemData.price) }}</b>
        </div>
    </div>
</template>
<script>
import formatter from '~/utils/formatPrice'
export default {
    data: () => ({
        formatter
    }),
    props: {
        itemData: {}
    },
}
</script>