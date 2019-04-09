import React from 'react'
import Img  from 'gatsby-image'; 
import { StaticQuery, graphql } from 'gatsby';

const getDide =graphql`
  {
    file(relativePath:{eq:"bcg-images/person.jpeg"}){
      childImageSharp{
        fluid(maxWidth:300) {
         ...GatsbyImageSharpFluid_tracedSVG 
        }        
      }
    }
  }
`


export default function dude() {
  return (
    <StaticQuery query={ getDide } render={data=>{
        return <div style={{maxWidth: '300px'}}>
                <Img fluid={data.file.childImageSharp.fluid} />
            </div>
    }}/>    
  )
}
