<template>
  <modal>
    <template #title> Создание нового рецепта </template>
    <div class="flex flex-col gap-4">
      <InputText placeholder="Введите название рецепта" />
      <Select
        placeholder="Выберите категорию"
        checkmark
        :options="recepies"
        key="id"
        v-model="category"
      />
      <Editor placeholder="Введите описание рецепта" />
      <MButton> Сохранить </MButton>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/MModal/MModal.vue";
import InputText from "primevue/inputtext";
import Editor from "primevue/editor";
import MButton from "@/components/MButton/MButton.vue";
import Select from "primevue/select";

export default defineComponent({
  name: "CreateModal",
  components: { Modal, InputText, Editor, MButton, Select },
  data() {
    return {
      recepies: ["Горячее", "Напитки", "Холодное"],
      category: "",
    };
  },
});
</script>
