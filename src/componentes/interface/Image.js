








import React from 'react'
import Styles from './Image.module.css'




const Image = ({ alt, ...props }) => {


  const [skeleton, setSkeleton] = React.useState(true)

  function handleLoad({target}){
    target.style.opacity = 1
    setSkeleton(false)
  }

  return (
    <div className={Styles.wrapper}>
      {skeleton && <div className={Styles.skeleton}></div>} 
      <img onLoad={handleLoad} className={Styles.img} alt={alt} {...props}/>
    </div>
  )
}

export default Image