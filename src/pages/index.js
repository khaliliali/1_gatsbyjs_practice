import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { FaApple } from 'react-icons/fa';
import Section from '../components/section/section';
import Info from '../components/info'
import Dude from '../components/dude';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/"> Products Page </Link>
    <Info/>
      <Dude/>
    <Link to="/images/">images</Link>
    <h1>Hi Homoro</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Section/>
      <Image />
    </div>
    <FaApple className="icon" >i am ali also </FaApple>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">TEsting</Link>
 
  </Layout>
)

export default IndexPage
