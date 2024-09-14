<template>
   <div class="flex flex-col gap-4 static">
          <div class="relative">
              <img src="https://www.edding.com/fileadmin/ideas/creative-recipe-book/creative-recipe-book-title-01.jpg" class="w-full">
              <div class="absolute top-24 left-20 w-1/2">
              <p class="text-4xl text-blue-500 font-bold uppercase animate__animated animate__bounceInLeft">
                <span class="text-black">MyCookBook</span> - простой и удобный способ <span class="text-black">сохранять рецепты</span> - ваших любимых блюд
              </p>
            </div>
          </div>
        <div class="flex justify-center gap-4">

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';

export default defineComponent({
  name: 'HomeView',
  components: {
    Card
  }
})
</script>
