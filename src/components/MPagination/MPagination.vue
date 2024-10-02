<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MPagination",
  props: {
    currentPage: Number,
    totalPage: Number,
    limiteDate: Number,
  },
  data() {
    return {
      currentPagelocal: ref(this.currentPage),
    };
  },

  methods: {
    nextPage() {
      if (this.currentPagelocal < this.totalPage) {
        this.currentPagelocal++;
      }
    },
    prevPage() {
      if (this.currentPagelocal > 1) {
        this.currentPagelocal--;
      }
    },
  },
});
</script>

<template>
  <div class="rounded-full flex border-solid border-2 border-gray">
    <div dir="rtl">
      <div @click="prevPage()" class="border-s-2 px-2 hover:cursor-pointer">
        <i
          :class="{ 'opacity-40': this.currentPagelocal == 1 }"
          class="fa-solid fa-arrow-left"
        ></i>
      </div>
    </div>
    <div class="px-2">{{ currentPagelocal }} of {{ totalPage }}</div>
    <div dir="ltr">
      <div @click="nextPage()" class="border-s-2 px-2 hover:cursor-pointer">
        <i
          :class="{ 'opacity-40': this.currentPagelocal == this.totalPage }"
          class="fa-solid fa-arrow-right"
        ></i>
      </div>
    </div>
  </div>
</template>
