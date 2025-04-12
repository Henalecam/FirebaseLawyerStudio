'use client';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 text-primary">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-8">
          Ready to discuss your labor law concerns? Contact us today to schedule
          a consultation and learn how Henrique Camargo can help you protect
          your rights.
        </p>
        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <Input type="text" placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
