import Styles from './FeedPhotoItem.module.css'
import Image from '../interface/Image'

const FeedPhotoItem = ({photo, setModalPhoto}) => {

  function handleClick(){
    setModalPhoto(photo)
  }

  return(
    <li className={Styles.photo} onClick={handleClick}>
      <Image  src={photo.src} alt={photo.title}/>
      <span>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem