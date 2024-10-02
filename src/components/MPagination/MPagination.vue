<template>
  <div class="rounded-full flex border-solid border-[1px] border-gray">
    <div>
      <div @click="prevPage()" class="px-2 hover:cursor-pointer">
        <i
          :class="{ 'opacity-40': currentPagelocal == 1 }"
          class="fa-solid fa-arrow-left"
        ></i>
      </div>
    </div>
    <div
      v-if="currentPagelocal > 1"
      class="px-2 border-solid border-x-[1px] border-gray"
    >
      ...
    </div>
    <div class="px-2 border-solid border-x-[1px] border-gray">
      {{ currentPagelocal }} / {{ totalPage }}
    </div>
    <div
      v-if="totalPage - currentPagelocal > 1"
      class="px-2 border-solid border-x-[1px] border-gray"
    >
      ...
    </div>
    <div>
      <div @click="nextPage()" class="px-2 hover:cursor-pointer">
        <i
          :class="{ 'opacity-40': currentPagelocal == totalPage }"
          class="fa-solid fa-arrow-right"
        ></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MPagination",
  props: {
    currentPage: Number,
    totalPage: Number,
  },
  data() {
    return {
      currentPagelocal: this.currentPage,
    };
  },

  methods: {
    nextPage() {
      if (this.currentPagelocal < this.totalPage) {
        this.currentPagelocal++;
        this.$emit("update", this.currentPagelocal);
      }
    },
    prevPage() {
      if (this.currentPagelocal > 1) {
        this.currentPagelocal--;
        this.$emit("update", this.currentPagelocal);
      }
    },
  },
});
</script>
