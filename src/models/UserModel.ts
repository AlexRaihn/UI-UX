import axios from "axios"

export class UserModel {
    id = 0
    user = ''
    password = ''

    data = {
        id: 123,
    }

    async logIn() {
        this.setToken('crm_token', '134')
        this.id = this.data.id
        return true
            // return axios.post('http://127.0.0.1:4000/user', {
            //     data: {
            //         username: this.user ?? 'имя',
            //         password: this.password ?? 'пароль'
            //     }
            // },
            // {
            //     headers: {
            //         'crm_token': localStorage.getItem('crm_token')
            //     }
            // }).then((response) => {
            //     this.setToken(response.data.crm_token)
            //     this.id = this.data.id
            //     return true
            // }).catch(e => {
            //     console.log(e)
            // })
        }

    async logOut() {
        this.id = 0
        this.user = ''
        this.password = ''
        localStorage.removeItem('crm_token')
    }

    setToken(crm_token: string) {
        localStorage.setItem('crm_token', crm_token)
    }
}