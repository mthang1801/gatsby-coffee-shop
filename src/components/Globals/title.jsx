import React from "react"
import styled  from "styled-components"
const Title = ({ title, subtitle, className }) => {  
  return (
    <div className={className}>
      <h2>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h2>
    </div>
  )
}

export default styled(Title)`
  margin : 0 auto 3rem auto;
  text-align : center;
  text-transform: uppercase;
  font-size : 1.2em;
  .title{
    margin-right: 1rem;    
  }
  .subtitle{
    color : var(--mainYellow);
  }
  text-shadow : 2px 3px 4px rgba(0,0,0,0.2);
`
