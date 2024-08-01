import React from 'react';
// import SignIn from '../pages/Login/SignIn';
import Header from './Header';
import Footer from './Footer';

function Home() {
  // const handleSignOut = () => {
  //   localStorage.removeItem('token')
  //   window.location = '/login'
  // }
  return (
    <div>
      <Header></Header>
      {/* <h1>welcome to fueltrack</h1>
      <button onClick={handleSignOut}>Sign Out</button> */}
      <footer></footer>
    </div>
  )
}

export default Home;