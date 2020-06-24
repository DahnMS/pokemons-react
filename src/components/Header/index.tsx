import React from 'react';

interface IHeader {
  title: string;
  subtitle?: string;
}

const Header: React.FC<IHeader> = ({ title, subtitle }) => {
  return (
    <header>
      <h1> {title} </h1>
    </header>
  );
}

export default Header;