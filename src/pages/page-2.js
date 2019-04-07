import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button } from '../components/Button';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      <div className="row">
        <div className="col-6">hello</div>
        <div className="col-6">Homoro again</div>
      </div>
      <Button>i am ali also </Button>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default SecondPage
