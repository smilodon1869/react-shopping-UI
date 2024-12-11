import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer' 
import WomenCollection from '../components/WomenCollection'
import {Gents,Ladies} from '../data'

const MainPage = () => {
    const[gentsFashion , setGentsfashion] = useState(Gents)
    const[ladiesFashion , setLadiesfashion] = useState(Ladies)
    console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion = {gentsFashion} />
        <WomenCollection ladiesFashion = {ladiesFashion}/>
        <Footer />
    </div>
  )
}

export default MainPage