<template>
  <div
    class="w-full flex items-center gap-4 py-4 px-8 max-sm:flex-wrap"
    :class="[position, bg, color]"
  >
    <div class="flex items-center gap-4" :class="[linksPosition]">
      <slot name="logo" />
    </div>

    <div class="flex items-center gap-4 max-sm:hidden" :class="[linksPosition]">
      <slot name="links" />
    </div>
    <div class="flex items-center gap-4 max-sm:hidden" :class="[linksPosition]">
      <slot name="login" />
    </div>

    <div class="hidden max-sm:block">
      <i
        class="fa-solid fa-bars duration-300"
        :class="{ 'rotate-90': isCollapsed }"
        @click="toggleCollapse"
      ></i>
      те
    </div>
    <div
      :class="{ 'animate__animated animate__fadeInDown': isCollapsed }"
      class="w-full shrink sm:hidden"
      v-if="isCollapsed"
    >
      <div class="flex flex-col gap-4">
        <div>
          <slot name="links" />
        </div>
        <div>
          <slot name="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      isCollapsed: false,
    };
  },
  props: {
    position: {
      type: String,
      required: false,
      default: "justify-between",
    },
    linksPosition: {
      type: String,
      required: false,
      default: "justify-between",
    },
    bg: {
      type: String,
      required: false,
      default: "bg-gray-500",
    },
    color: {
      type: String,
      required: false,
      default: "text-black",
    },
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
});
</script>
