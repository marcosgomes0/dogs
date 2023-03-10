import  React from 'react'

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const request = React.useCallback( async (url, options) => {
      
    let response;
    let json;

      try {
        setLoading(true)
        setError(null)
        response = await fetch(url, options)
        json = await response.json()
        if (response.ok === false) {throw new Error(json.message)}
      } catch(err){
        json = null
        setError(err.message)
      } finally{
        setData(json)
        setLoading(false)
        return {request, json, response}
      }
},[])

    return{
      data,
      loading,
      error,
      request
    }

}

export default useFetch