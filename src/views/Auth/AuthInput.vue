<template>
    <div>
        <Card class="relative">
            <template #content>
                <div class="flex flex-col gap-8 p-10 m-0 bg-white">
                    <div class="text-center font-bold">
                        Авторизация
                    </div>
                    <input type="text" v-model="useUserStore.model.user" placeholder="Введите логин" class="border-b-[1px] border-black focus:outline-none"/>
                    <input type="password" placeholder="Введите пароль" v-model="useUserStore.model.password" class="border-b-[1px] border-black focus:outline-none"/>

                    <div class="mx-auto">
                        <Button @click="authUser" class="!bg-blue-500 !text-white animate__animated animate__fadeInDown animate__pulse">
                                Вход
                        </Button>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserStore } from '@/stores/auth';
import Button from 'primevue/button';
import Card from 'primevue/card';

export default defineComponent({
    name: 'AuthInput',
    components: {
        Button,
        Card
    },
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
    methods: {
        async authUser() {
            await this.useUserStore.model.logIn().then(() => {
                this.$router.push({
                    name: 'ProfileIndex'
                })
            }).catch(e => {
                alert('ОШибка! ' + e)
            })
        }
    }
})
</script>