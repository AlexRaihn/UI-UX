<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MButton",
  props: {
    bg: {
      type: String,
      required: false,
      default: 'bg-primary'
    },
    text_color: {
      type: String,
      required: false,
      default: 'text-white'
    }
  }
})
</script>

<template>
  <div class="p-2 rounded-lg text-center" :class="[bg, text_color]">
    <slot/>
  </div>
</template>