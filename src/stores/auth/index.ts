import { defineStore } from "pinia";
import { UserModel } from "@/models/UserModel";

export const UserStore = defineStore('user', {
    state: () => {
        return {
            model: new UserModel(),
        }
    }
})