import React from 'react'
import{NavLink} from 'react-router-dom'

const Home = () => {
  return (
<>
<header>
    <div></div>
    <nav className='h-10 w-40  border-2 border-indigo-600 my-5 flex justify-between flex-row gap-3'>
  <NavLink to='/'>Home</NavLink>
  <NavLink to='/'>Abotu</NavLink>
  <NavLink to='/'>Project</NavLink>
  <NavLink to='/'>Edicution</NavLink>
  <NavLink to='/'>Contact</NavLink>
</nav>
</header>
</>   
  )
}

export default Home

