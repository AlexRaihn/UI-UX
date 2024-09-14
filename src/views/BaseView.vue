<template>
  <div>
    <NavBar bg="bg-primary" color="text-white" class="bg-blue-500">
      <template #logo>
        <div>
          <router-link :to="{ name: 'BaseView' }">
            <span class="logo"> MyCookBook </span>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: 'Re' + 'cipesIndex' }">
            Рецепты
          </router-link>
        </div>
      </template>
      <template #login>
        <div class="ml-auto flex gap-8 items-center">
          <div>
            <router-link :to="{ name: 'ProfileIndex' }"> Профиль </router-link>
          </div>
          <router-link
            @click="useUserStore.model.logOut()"
            :to="{ name: 'PublicView' }"
          >
            Выход
            <i class="fa-regular fa-user"></i>
          </router-link>
        </div>
      </template>
    </NavBar>
    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { UserStore } from "@/stores/auth";
import NavBar from "@/components/MNavBar/MNavBar.vue";

export default defineComponent({
  name: "BaseView",
  setup() {
    const useUserStore = UserStore();

    return {
      useUserStore,
    };
  },
  data() {
    return {};
  },
  components: {
    NavBar,
  },
});
</script>
