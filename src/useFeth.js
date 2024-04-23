import { useState , useEffect } from "react"
function UseFetch (url){
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error , setError] = useState(null)

    // const [name, setName] = useState("Jean") 'http://localhost:8000/blogs'

    useEffect(() => {
        const AbortCont = new AbortController()
        const signal = AbortCont.signal;
        setTimeout(() => {
            fetch(url , {signal})
                .then(res => {
                    if(!res.ok){
                        throw new Error("Could not fetch the data for the ressource ");
                    }
                   return res.json();                   
                })
                .then(data => {
                    setData(data);
                    setIsPending(false)
                    setError(null)
                })
                .catch( (er) =>{
                    if(er.name == 'AbortError'){
                        console.log("fetch error")
                    }
                    else{
                        setIsPending(false)
                        setError(er.message)
                    }
                   
                })
        } , 1000)
        return () => AbortCont.abort()
    }, [url])

    return {data , isPending , error}
}
export default UseFetch