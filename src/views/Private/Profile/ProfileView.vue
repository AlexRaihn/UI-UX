<template>
    <div class="flex flex-col gap-4">
        <Card>
            <template #title>
                Профиль
            </template>
            <template #content>
                <div class="flex gap-4">
                    <div class="!rounded-full">
                        <Avatar image="https://www.bethowen.ru/upload/medialibrary/9d8/9d8452cc9715dad6626a4f8aeee346dd.jpg" size="xlarge" shape="circle" />
                    </div>
                    <div class="flex flex-col gap-4">
                        <div>{{ useUserStore.model.user }}</div>
                    </div>
                </div>
            </template>
        </Card>
        <Card>
            <template #title>
                <div class="flex w-full justify-between">
                  <div>Мои рецепты</div>
                  <div>
                    <button @click="openCreateModal">Создать</button>
                  </div>
                </div>
            </template>
            <template #content>
                Рецепт
            </template>
        </Card>
    </div>
  <CreateModal @close="closeCreateModal" v-if="state.showOpenCreateModal"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserStore } from '@/stores/auth';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import CreateModal from "@/components/ui/RecipesBlocks/Modals/CreateModal.vue";

export default defineComponent({
    name: 'ProfileView',
    components: {
      Card,
      Avatar,
      CreateModal
    },
    setup() {
        const useUserStore = UserStore()
        
        return {
            useUserStore
        }
    },
    data() {
        return {
          state: {
            showOpenCreateModal: false,
          }
        }
    },
  methods: {
    openCreateModal() {
      this.state.showOpenCreateModal = true;
    },
    closeCreateModal() {
      this.state.showOpenCreateModal = false;
    }
  }
})
</script>