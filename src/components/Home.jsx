
import React from "react"
import Navbar from "./Navbar"
import Category from "./Category"
import Footer from "./Footer"
import { Main } from "./Main"
import Features from "./Features"
import Singlequiz from "./Singlequiz"

import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>

 <Main/>
 <Category/>
    <Features/>
    {/* <Footer/> */}

    </>
  )
}

export default Home