<template>
  <div class="absolute top-0 left-0 z-[1000] bg-[#00000040] h-full w-full flex justify-center items-center">
    <div class="border-[1px] bg-white p-6 rounded-lg shadow flex flex-col gap-6 items-center w-full max-w-xl">
      <div class="w-full flex justify-between items-center p-y">
        <div class="font-bold text-lg">
          <slot name="title"/>
        </div>
        <div class="rounded-full text-lg cursor-pointer" @click="close">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Card from "primevue/card";

export default defineComponent({
  name: "Modal",
  emits: ['close'],
  components: {
    Card
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
})
</script>