



import { PHOTO_DELETE } from '../../api'
import useFetch from '../../hooks/useFetch'
import Styles from './PhotoDelete.module.css'




const PhotoDelete = ({id}) =>{

  const { loading, request } = useFetch()

 async function handleClick(e){

    const confirm = window.confirm('Confirmar delete')
    if (confirm){
    const token = localStorage.getItem('token')
    const { url, options } = PHOTO_DELETE(id, token)
    const { response } = await request(url, options)
    if (response.ok){
      window.location.reload()
    }
  }
  }

  return (
    <>
      {loading ? 'Deletando...' : <button className={Styles.delete} onClick={handleClick} >Delete</button>}
    </>
  )
}

export default PhotoDelete