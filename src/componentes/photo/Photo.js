





import React from "react"
import { useParams } from "react-router-dom"
import { PHOTO_GET } from "../../api"
import useFetch from "../../hooks/useFetch"
import Error from "../interface/Error"
import Head from "../interface/Head"
import Loading from "../interface/Loading"
import PhotoContent from "./PhotoContent"


const Photo = () =>{

  const {id} = useParams()
  const { data, loading, error, request } = useFetch()
  
  React.useEffect(()=>{
  async  function foto(){
    const { url, options } = PHOTO_GET(id)
    await request(url, options)
    }
    foto()
  },[id, request])
  
  
  if (error) return <Error error={error}/>
  if (loading) return <Loading/>
  if (data) return (
    <section className="container mainContainer">
      <Head title={data.photo.title}/>
      <PhotoContent single={true} data={data}/> 
    </section>
  )
  else return null  
}

export default Photo