<template>
    <div class="h-full w-full flex items-center justify-center bg-gray-100">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Recipesindex',
    data() {
        return {

        }
    }
})
</script>