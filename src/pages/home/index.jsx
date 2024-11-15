import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Banner from "../../componentes/Banner"
import { SectionHome } from "../../componentes/section"
import Logo from "../../componentes/Logo"
import { Apresentacao } from "../../componentes/apresentacao"
import { Input } from "../../componentes/input"
import { MdSearch } from "react-icons/md"







export const Home = () => {
    const navigate = useNavigate()
    const [name,setName] =  useState("")
    return(
    <>
       <Banner image="/images/bannerBlack.png"/>
       
       <SectionHome>
       
      <Logo />
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button style={{position: "absolute"}} onClick={() => navigate(`/result?name=${name}`)}>Enviar</button>
      <MdSearch />
      <Apresentacao/>
       </SectionHome>
    </>
    )
}