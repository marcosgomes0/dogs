








import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from 'prop-types'

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(()=>{

    function infiniteScroll(){

      let wait = false;
      const scroll = window.scrollY
      const height = document.body.offsetHeight - window.innerHeight

    if ( infinite === true){
      if (scroll > height * .75 && !wait){
        setPages((page)=> [...page, page.length + 1])
        wait = true
        setTimeout(()=>{
        wait = false
        }, 600)
      }
    }
  }

    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    return ()=>{
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  },[infinite])

  return (
    <section>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page)=>(
        <FeedPhotos key={page} user={user} page={page} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
      ))}
      
    </section>
  );
};


Feed.defaultProps = {
  user: 0
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed;
