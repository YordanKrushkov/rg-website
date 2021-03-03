const url='https://rg-gallerybackend.herokuapp.com/getone'
const getOne=async(id)=>{
   const promise= await fetch(url,{
        method:'GET',
        headers:{'key':id}
    })
    const res= await promise.json()
    return res

}
export default getOne