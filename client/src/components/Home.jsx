import React from 'react';
// import SignIn from '../pages/Login/SignIn';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

function Home() {
  // const handleSignOut = () => {
  //   localStorage.removeItem('token')
  //   window.location = '/login'
  // }
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Home;