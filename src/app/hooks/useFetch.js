import React, { useEffect, useState } from 'react'

function useFectch() {

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null)

  useEffect(()=> {

    const Fetching = async () => {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error ('Error en la peticion')
        }
        const jsonDta = await response.json()
        setData(jsonDta)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }
    }
  
    Fetching()

  },[url]);
  


  return {
    data, 
    error,
    loading
  }

}

export default useFectch
