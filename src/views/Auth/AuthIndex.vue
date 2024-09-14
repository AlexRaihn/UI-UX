<template>
    <div class="h-full w-full flex items-center justify-center bg-gray-100">
        <router-view/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UserStore } from '@/stores/auth';

export default defineComponent({
    name: 'AuthIndex',
    setup() {
        const useUserStore = UserStore()

        return {
            useUserStore
        }
    },
    data() {
        return {

        }
    },
    async created() {
        if(localStorage.getItem('crm_token') != null)
            await this.useUserStore.model.logIn().then((response) => {
                if(response)
                    this.$router.push({ name: 'ProfileIndex' })
        })
    }
})
</script>
