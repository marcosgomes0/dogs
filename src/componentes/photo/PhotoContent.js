








import Styles from './PhotoContent.module.css'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'

import PhotoDelete from './PhotoDelete'
import { UseContext } from '../../useContext'
import React from 'react'
import Image from '../interface/Image'




const PhotoContent = ({data, single}) => {

  const user = React.useContext(UseContext)
  const {photo, comments} = data

  return (
    <div className={`${Styles.photo} ${single ? Styles.single : ''}`}>
      <div className={Styles.img}>
        <Image  src={photo.src} alt={photo.title}/>
      </div>
      <div className={Styles.details}>
        <div>
          <p className={Styles.author}>
          {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id}/> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
          <span className={Styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>  
          </h1>
          <ul className={Styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade === 1 ? 'ano' : `${photo.idade} anos`}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single}/>
    </div>
  )
}

export default PhotoContent