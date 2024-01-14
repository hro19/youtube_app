import { useCookies } from '@vueuse/integrations/useCookies'
import { defineStore } from 'pinia'

export const useCookiesStore = defineStore('cookies', {
    state: () => ({
        cookies: useCookies(['ya_username'])
    }),
    actions: {
        setUsername(name: string) {
            this.cookies.set('ya_username', name, { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) } as any)
        },
        getUsername() {
            return this.cookies.get('ya_username')
        },
        observerUsername() {
            this.cookies.addChangeListener(() => {
                console.log(`${this.cookies}に変更されました`)
            })
        },
        removeUsername() {
            this.cookies.remove('ya_username')
        }
    }
})

// Usage:
// import { useCookiesStore } from '@/stores/CookiesStore'
// const cookiesStore = useCookiesStore()
// cookiesStore.setUsername('John')
// const username = cookiesStore.getUsername()
// cookiesStore.observerUsername()

