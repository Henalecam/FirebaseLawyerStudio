import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            Camargo Legal
          </a>
          <div>
            <a href="#services" className="px-4 hover:text-accent">
              Serviços
            </a>
            <a href="#contact" className="px-4 hover:text-accent">
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
