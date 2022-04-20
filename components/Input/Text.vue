<template>
  <div class="input-text">
    <label v-if="label" class="flex flex-col font-bold text-xs">{{ label }}
      <input
        v-bind="$attrs"
        class="field h-14 px-6 text-sm font-bold border rounded-lg mt-2 focus:outline-none focus:border-orange"
        @input="$emit('input', $event.target.value)"
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
      validation: propValue => {
        propValue.length > 3
        return true
      }
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