import React from 'react';

const AuthLayout = ({ children } : any) => {
  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="max-w-4xl  shadow-dark w-full flex flex-col md:flex-row bg-darker  shadow-md overflow-hidden rounded-lg">
      <div className="hidden md:block md:w-1/2 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/231/940/desktop-wallpaper-random-inspiration-335-apple-products-thumbnail.jpg')" }}>
      {/* You can add any overlay or additional styles here */}
    </div>
        {children}
     
      </div>
    </div>
  );
};

export default AuthLayout;
