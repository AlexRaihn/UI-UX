<template>
    <div>
        <NavBar bg="bg-primary" color="text-white">
            <template #logo>
                    <router-link to="/" class="logo">
                        MyCookBook
                    </router-link>
            </template>
            <template #links>
              <div>
                <router-link to="/about">
                  О нас
                </router-link>
              </div>
            </template>
            <template #login>
                <div class="ml-auto">
                    <router-link :to="{ name: 'AuthIndex'
                    }">
                        Вход
                        <i class="fa-regular fa-user"></i>
                    </router-link>
                </div>
            </template>
        </NavBar>
        <div>
          <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import NavBar from '@/components/MNavBar/MNavBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PublicView',
    components: {
        NavBar,
    }
})
</script>