'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {ModeToggle} from '@/components/mode-toggle';
import {Menu, Phone, Scale} from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm text-foreground py-4 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Camargo Legal</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              onClick={() => scrollToSection('sobre')}
              className="px-3 py-2 hover:text-primary transition-colors cursor-pointer"
            >
              Sobre Nós
            </a>
            <a 
              onClick={() => scrollToSection('servicos')}
              className="px-3 py-2 hover:text-primary transition-colors cursor-pointer"
            >
              Serviços
            </a>
            <a 
              onClick={() => scrollToSection('depoimentos')}
              className="px-3 py-2 hover:text-primary transition-colors cursor-pointer"
            >
              Depoimentos
            </a>
            <Button 
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollToSection('contato')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Fale Conosco
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-2">
              <a 
                onClick={() => scrollToSection('sobre')}
                className="px-3 py-2 hover:bg-muted rounded-md cursor-pointer"
              >
                Sobre Nós
              </a>
              <a 
                onClick={() => scrollToSection('servicos')}
                className="px-3 py-2 hover:bg-muted rounded-md cursor-pointer"
              >
                Serviços
              </a>
              <a 
                onClick={() => scrollToSection('depoimentos')}
                className="px-3 py-2 hover:bg-muted rounded-md cursor-pointer"
              >
                Depoimentos
              </a>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 justify-start"
                onClick={() => scrollToSection('contato')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
