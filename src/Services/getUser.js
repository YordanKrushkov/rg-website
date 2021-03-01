import getCookie from '../utils/getCookie'
const url='http://localhost:4500/user'
const getMyData=async()=>{
   const promise= await fetch(url,{
        method:'GET',
        headers:{'Auth':getCookie('x-auth-token')}
    })
    const res= await promise.json()
    return res

}
export default getMyData