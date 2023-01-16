import { useState, useEffect } from "react";
import axios from "axios";
// import Empty from "./Empty";
const useFetch = (dataurl) => {
    const [data, setData] = useState([]);
    // const [empty, setEmpty] = useState(null)
    const [ispending, setIspending] = useState(false);
    const [error, setError]= useState(null);
    useEffect(()=>{
        //    const abortcont = new AbortController();
        let isMounted = true;
        console.log("Dashboard is mounted");
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        const fetchData = async (url) => {
            setIspending(true);
            try{
                const response = await axios.get(url, {
                    headers: {
                    "authorization": `Bearer ${datas.token.token.token}`
                    }});
                    if(isMounted) {
                        
                        console.log(response.data)
                        setData(response.data);
                        setError(null);
                    }
            } catch (err){
                if(isMounted){
                    setError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setIspending(()=>setIspending(false), 2000);
            }
     }
     fetchData(dataurl);

     const cleanup = () =>{
        console.log('clean up function')
        isMounted = false;
     }
     return cleanup
    }, [dataurl])
     
     return {data, ispending, error}
}
 
export default useFetch;