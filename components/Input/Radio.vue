<template>
    <div class="input-radio flex flex-col gap-4 lg:flex-wrap lg:flex-row lg:justify-between w-full relative">
        <small class="absolute top-0 right-0 text-red-600 font-medium text-xs">{{ error }}</small>
        <div class="font-bold text-xs">{{ title }}</div>
        <div class="flex flex-col gap-6 lg:w-input1/2">
            <label 
                v-for="(radio, index) in radios" :key="index"
                class="font-bold h-14 text-base flex gap-6 px-6 items-center rounded-lg w-full hover:border-orange cursor-pointer"
                :class="error ? ['border-red-500', 'border-2'] : 'border'"
            >
                <input 
                    type="radio" 
                    v-bind="$attrs"
                    class="text-sm font-bold appearance-none rounded-xl"
                    :class="index === selected ? 'bg-orange' : '' "
                    :value="radio"
                    :checked="index === selected"
                    @change="$emit('input', radio), selected = index, $emit('validate')"
                >
                {{ radio }}
            </label>
        </div>
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