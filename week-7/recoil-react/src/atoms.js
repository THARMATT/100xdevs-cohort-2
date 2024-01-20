import {atom, selector} from 'recoil'
export const networkAtom=atom({
key:'networkatom',
default:104
    
})
export const homeAtom=atom({
key:'homeatom',
default:2
    
})
export const messageAtom=atom({
key:'messageatom',
default:10
    
})
export const jobAtom=atom({
key:'jobatom',
default:104
    
})
export const totalNotificationSelector =selector({
    key:'toalselector',
    get:({get})=>{
        const notificationCount=get(networkAtom)
        const messageCount=get(messageAtom)
        const homeCount=get(homeAtom)
        const jobCount=get(jobAtom)
        return notificationCount+messageCount+homeCount+jobCount

    }
})