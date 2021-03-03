const url='https://rg-gallerybackend.herokuapp.com//get'
const getPaintings=async(gallery)=>{
   const promise= await fetch(url,{
        method:'GET',
        headers:{'gallery':gallery}
    })
    const res= await promise.json()
    return res

}
export default getPaintings