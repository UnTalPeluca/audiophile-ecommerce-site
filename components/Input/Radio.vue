<template>
    <div class="input-radio flex flex-col gap-4">
        <div class="font-bold text-xs pt-4">{{ title }}</div>
        <label 
            v-for="(radio, index) in radios" :key="index"
            class="font-bold h-14 text-base flex gap-6 px-6 items-center border rounded-lg focus-within:border-orange"
        >
            <input 
                type="radio" 
                v-bind="$attrs"
                class="text-sm font-bold appearance-none rounded-xl"
                :class="index === selected ? 'bg-orange' : ''"
                :value="radio"
                :checked="index === selected"
                @change="$emit('input', radio), selected = index"
            >
            {{ radio }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        radios: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required:true
        },
        error: {
            type: String,
            default: ''
        }
    },
    data:() => ({
        selected: null
    })
}
</script>
<style scoped>
input {
    position: relative;
    padding: 4px;
}

input::before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    border-radius: 90px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>