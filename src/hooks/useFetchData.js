import { useState, useEffect } from "react"
import axios from "axios";

const useFetchData = (URL) => {

    const [response, setResponse] = useState();

    useEffect(() => {
        axios.get(URL)
            .then(res => setResponse(res.data.results))
            .catch(err => console.log(err))
    },[])

  return response
}

export default useFetchData
