<template>
  <div>
    <div @mouseover="upHere = true" @mouseleave="upHere = false">
      <slot />
    </div>
    <div v-show="upHere" class="absolute z-9999">
      <div
        class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
      >
        <h3 class="font-semibold text-gray-900 dark:text-white">
          Popover title
        </h3>
      </div>
      <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
      <div data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MPopover",
  data() {
    return {
      upHere: false,
    };
  },
});
</script>
