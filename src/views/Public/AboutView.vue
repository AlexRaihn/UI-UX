<template>
    <div class="p-4">
        <div class="flex flex-col gap-4">
            <Card>
                <template #title>
                    О Сайте
                </template>
                <template #content>
                    <p>Привет! Это сайт где можно сохранять и делить рецептами вкусной пищи между друг другом!</p>
                </template>
            </Card>
            <Card>
                <template #title>
                    Обо мне
                </template>
                <template #content>
                    <div class="flex flex-col gap-4">
                        <p>Меня зовут AlexRaihn, я занимаюсь этим проектом(сейчас один, надеюсь найду себе команду для него)</p>
                        <p>Моя цель в обучении новому и закреплению старого в моём ремесле - кодинге</p>
                        <p>А ещё я люблю вкусно покушать и хочу хранить рецепты у себя под рукой</p>
                            <Image src="https://img.freepik.com/premium-photo/art-grandma-is-peach-pie-side-view-generative-ai_665163-2200.jpg" class="mx-auto animate__animated animate__fadeInLeft"/>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import Image from 'primevue/image';

export default defineComponent({
    name: 'AboutView',
    components: {
        Card,
        Image
    }
})
</script>