import React from 'react';
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";



function FooterPage() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 text-white font-normal">
          <div>
            <FooterTitle className ="font-bold text-xl"title="Company" />
            <FooterLinkGroup className="px-3 py-1" col>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">About</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className ="font-bold text-xl"title="Help center" />
            <FooterLinkGroup className="px-3 py-1" col>
              <FooterLink href="#">Discord Server</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className ="font-bold text-xl"title="Legal" />
            <FooterLinkGroup className="px-3 py-1" col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className ="font-bold text-xl"title="Version" />
            <FooterLinkGroup className="px-3 py-1" col>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink> 
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between text-white">
          <FooterCopyright href="#" by="Pitchayuth™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterPage;