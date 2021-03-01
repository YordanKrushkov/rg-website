const authenticate=async (url,body, onSuccess, onFeliure)=>{
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const authToken = promise.headers.get('Authorization')
        document.cookie = `x-auth-token=${authToken}`
       
        const response = await promise.json();
        if (response.email && authToken && response._id) {
            onSuccess({
                email: response.email,
                id: response._id
            })
        } else {
        onFeliure(response)
        }
    }
    catch (e) {
        onFeliure(e)
    }
}
export default authenticate