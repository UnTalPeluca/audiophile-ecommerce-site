<template>
  <div class="input-text w-full relative">
    <small class="absolute top-0 right-0 text-red-600 font-medium text-xs">{{ error }}</small>
    <label 
      v-if="label" 
      class="flex flex-col font-bold text-xs cursor-pointer"
      :class="{ ['text-red-600']: error }"
    >{{ label }}
      <input
        v-bind="$attrs"
        :class="error ? ['border-2', 'border-red-600'] : ['border']" 
        class="field h-14 px-6 text-sm font-bold rounded-lg mt-2 focus:outline-none focus:border-orange hover:border-orange"
        @input="[$emit('input', $event.target.value), $emit('validate')]"
        @keydown.enter="$emit('onEnterPressed')"
      >
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>
::placeholder {
  font-weight: bold;
  font-size: 14px;
  color: black;
  opacity: 0.5;
}

</style>