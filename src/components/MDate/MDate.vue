<style lang="sass" src="./MDate.sass" />

<template>
  <div class="flex flex-col gap-2">
    <p v-if="label?.length > 0" class="font-bold text-md">{{ label }}</p>
    <div class="flex flex-col gap-1">
      <input
        class="p-1 border-0 rounded-md MDate-input"
        :class="outline"
        type="date"
        v-model="value"
      />
      <p v-if="description?.length > 0" class="text-sm text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MDate",
  props: {
    modelValue: {
      type: String,
      required: false,
    },
    outline: {
      type: String,
      required: false,
      default: "outline-0",
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      value: this.modelValue,
    };
  },
  watch: {
    modelValue: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.value = newVal;
      }
    },
    value: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("update:modelValue", newVal);
      }
    },
  },
});
</script>
