import React from 'react'
import Section1 from './componets/Section1/Section1'
import Section2 from './componets/section2/Section2'

const App = () => {

  const users = [
       {
        img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color:'blue',
        intro:'', 
        tag: 'Satisfied' 
       },
       {
        img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color:'lightseagreen',
        intro:'', 
        tag: 'Underserved'
       },
       {
        img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color:'lightblue', 
        intro:'', 
        tag: 'Underbanked'
      },
       {
        img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        color:'pink',
        intro: '', 
        tag: 'Underbanked'
      },
      {
        img:'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color:'red',
        intro:'',
        tag:'Average'
      }

  ]

  return (
    <div>
      <Section1  users={users} />
      <Section2 />
      
    </div>
  )
}

export default App
