'use client';

import React from 'react';

import {Button} from '@/components/ui/button';
import {ModeToggle} from '@/components/mode-toggle';

export const Navbar = () => {
  return (
    <nav className="bg-background text-foreground py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            Camargo Legal
          </a>
          <div className="flex items-center gap-4">
            <a href="#services" className="px-4 hover:text-accent">
              Serviços
            </a>
            <a href="#contact" className="px-4 hover:text-accent">
              Contato
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
