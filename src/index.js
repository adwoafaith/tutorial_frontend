import React from 'react'
import ReactDOM  from 'react-dom'
import { books } from './books';
import Book from './Book';
import { greeting } from './testing/testing';
import './style.css'
//the index js files is always and entry point
//set up variables

function Booklist(){
  console.log(greeting)
  //must always return html or jsx
  //accessing the items in the books array
  //events in react we need
  //attributes,eventHandler
  //onclick, onMouseover
  return ( 
  <section className='booklist'>
    {books.map((book) =>{
      return (
        <Book key ={book.id} {...book}></Book>
      );
    })} 
  </section>
  );

}




ReactDOM.render(<Booklist/>,document.getElementById('root'))
