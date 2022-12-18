import Styles from './UserPhotoPost.module.css'
import React from 'react';
import Input from '../form/Input'
import Button from '../form/Button';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Error from '../interface/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../interface/Head';

const UserPhotoPost = () =>{

  const nome= useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] =  React.useState({})
  const {data, error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(()=>{
   if (data) navigate('/conta')
  }, [data, navigate])
  
  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleImgChange({target}){
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  return (
    <section className={`${Styles.photoPost} enter`}>
      <Head title='Postar'/>
      <form onSubmit={handleSubmit}>
      <Input type='text' id='nome' label='Nome'  {...nome}/>
      <Input type='number' id='peso' label='Peso' {...peso} />
      <Input type='number' id='idade' label='Idade' {...idade}/>
      <input className={Styles.file} type='file' name='img' id='img' onChange={handleImgChange}  />
      {loading ? <Button disabled>Postando...</Button> : <Button>Postar</Button>}
      <Error error={error}/>
      </form>
      <div>
        {img.preview && <div className={Styles.preview}style={{backgroundImage:`url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost