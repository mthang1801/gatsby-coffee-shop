import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink"
const getMenu = graphql`
{
  menu : allContentfulCoffeeShopCategory{
    edges{
      node{
        title
      }
    }
  }
}
`
const Menu = ({isOpen, className}) => {
  const {menu} = useStaticQuery(getMenu);
  return (
    <div className={className} isOpen={isOpen}>
      <ul>
        {menu.edges.map(({node}) => (
          <AniLink key={node.title} fade to={`/category/${node.title}`} >{node.title}</AniLink>
        ))}
      </ul>
    </div>
  )
}

export default styled(Menu)`
  position : absolute;
  max-height: ${({isOpen}) => isOpen ? "100vh" : "0" };
  transition : var(--mainTransition);
  background-color : var(--mainGrey);
  box-shadow : var(--lightShadow);
  text-align : left ; 
  text-transform : capitalize ;
  left : 5rem ;
  top : 35%;

  ul{
    list-style : none ; 
  }
  a{
    display : block;
    color : var(--mainBlack);    
    text-decoration : none ; 
    color : var(--mainBlack);
    padding : 0.5rem 8rem 0.5rem 1rem;
    border : 1px solid var(--mainDark);
    &:hover{
      background-color : var(--mainYellow);
      color : var(--mainWhite);
    }
    &:not(:last-child) {
      border-bottom : none ;
    }
  }  
  overflow : hidden ;
  z-index: 1;  
  @media screen and (min-width:992px){
    left : 20%;
    top : 80%;
    a{
      padding : 0.5rem 3.5rem 0.5rem 1rem;
    }
  }
  
`
