







import Styles from "./FeedModal.module.css";
import useFetch from '../../hooks/useFetch'
import { PHOTO_GET } from "../../api";
import React from "react";
import Error from "../interface/Error";
import Loading from "../interface/Loading";
import PhotoContent from "../photo/PhotoContent";




const FeedModal = ({photo, setModalPhoto}) => {

const {data, error, loading, request} = useFetch()

React.useEffect(()=>{
  const { url, options } = PHOTO_GET(photo.id)

  request(url,options)

},[request, photo])


function handleClick(e){
  if(e.target === e.currentTarget){
    setModalPhoto(false)
  }
}

  return (
    <div className={Styles.modal} onClick={handleClick}>
    {error && <Error error={error}/>}
    {loading && <Loading/>}
    {data && <PhotoContent data={data}/>}
    </div>
  )
};

export default FeedModal;
