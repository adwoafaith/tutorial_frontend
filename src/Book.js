import React from 'react'

const Book =({image, title,author})=>{
  //reference
  const clickHandler = (e) =>{
    console.log(e)
    console.log(e.target)
    alert ('hello world')
  }
  const complexExample = (author) =>{
    console.log(author)
  }
  return (
    <article className='book'
     onMouseOver={()=>{
      console.log(title)

    }}>
      <img src={image} alt="" height={150} width={150}/>
      <h1 onDoubleClick ={()=>alert(title)}>{title}
      </h1>
      <h4>{author}</h4> 
      <button className='reference' type ="button" 
        onClick={clickHandler}>reference example
      </button>
      <button type="button" onClick={()=>complexExample(author)}>
        more complex example
      </button>
    </article>
  );
  }

export default Book