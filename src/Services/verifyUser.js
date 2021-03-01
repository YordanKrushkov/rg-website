import getCookie from '../utils/getCookie'
const url = 'http://localhost:4500/verify';
const userVerify= async(token)=>{
    let promise = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie(token)
        },
    })
    let extra = await promise.json()
   return extra
}
export default userVerify