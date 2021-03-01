const url='http://localhost:4500/get'
const getPaintings=async(gallery)=>{
   const promise= await fetch(url,{
        method:'GET',
        headers:{'gallery':gallery}
    })
    const res= await promise.json()
    return res

}
export default getPaintings