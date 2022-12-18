

import { Route, Routes } from "react-router-dom"
import Feed from "../feed/Feed"
import HeaderUser from "./HeaderUser"
import UserPhotoPost from "./UserPhotoPost"
import React from "react"
import { UseContext } from "../../useContext"
import NotFound from "../interface/NotFound"
import Head from "../interface/Head"

const User = () => {

const { data } = React.useContext(UseContext)

  return <section className="container">
    <HeaderUser/>
    <Head title='Minha Conta'/>
    <Routes>
      <Route path="/" element={<Feed user={data.id}/>}/>
      <Route path="postar" element={<UserPhotoPost/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </section>
}

export default User