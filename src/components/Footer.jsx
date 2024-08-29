import Container from './Container';
import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-neutral-900 text-gray-300">
      <Container>
        <div>
          <p className="text-xs font-semibold">
            More ways to shop: 
            <span className="underline text-blue"> Find an Apple Store </span>
            or 
            <span className="underline text-blue"> other retailer </span>
            near you.
          </p>
          <p className="text-xs font-semibold">Or call 000800-040-1966</p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="text-xs font-semibold">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-xs font-semibold">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;