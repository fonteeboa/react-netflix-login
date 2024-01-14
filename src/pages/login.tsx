import React from 'react';
import { Header, LoginForm, Footer, SmallScreen } from '../components';

function Login() {
  return (
    <>
      <SmallScreen />
      <div className="login h-screen w-full">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </>
  );
}

export default Login;
