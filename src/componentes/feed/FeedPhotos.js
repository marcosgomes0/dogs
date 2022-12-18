import FeedPhotoItem from "./FeedPhotoItem"
import useFetch from "../../hooks/useFetch"
import React from "react"
import { PHOTOS_GET } from "../../api"
import Error from "../interface/Error"
import Loading from "../interface/Loading"
import Styles from './FeedPhotos.module.css'

const FeedPhotos = ({setModalPhoto, user, page, setInfinite}) => {

  const {data, error, loading, request} = useFetch()

  React.useEffect(()=>{

    const total = 6
    async function fetchPhotos () {
    const { url, options } = PHOTOS_GET({ page , total, user})
    const { response, json } = await request(url, options)
    if (response && response.ok && json.length < total ){
        setInfinite(false)
    }
  }
  fetchPhotos()
},[request, user, page, setInfinite])

  if (error) return <Error error={error}/>
  if (loading) return <Loading/>
  if(data)
  return(
    <>
    <ul className={`${Styles.feed} enter`}>
     {data && data.map((photo)=>(
      <FeedPhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
     ))} 
    </ul>
   
    </>
  )
  else{
    return null
  }
}

export default FeedPhotos