import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto p-5 sm:p-10">
      {children}
    </div>
  );
};

export default Container;