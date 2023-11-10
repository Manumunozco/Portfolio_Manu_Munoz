import Link from 'next/link';
import { useRouter } from "next/router";
import React from 'react';
import Logo from './Logo';
import { TwitterIcon, GithubIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from './Icons';
import {motion} from "framer-motion";



const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  
return(
  <Link href={href} className={`${className} relative group`}>
    {title}

    <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
  </Link>
)
}

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
<nav>
<CustomLink href="/" title="Home" className="mr-4" />
<CustomLink href="/about" title="About" className="mx-4"  />
<CustomLink href="/projects" title="Projects" className="mx-4"/>
<CustomLink href="/articles" title="Articles" className="ml-4"/>

</nav>
<div>
  <CustomLink href="/dummy.pdf" target={"_blank"} title="Curriculum Vitae" className="mr-10" />
  <CustomLink href="mailto:munozc.manuel@gmail.com" title="Contact" />
</div>

<div className="absolute left-[50%] top-2 translate-x-[-50%]">
<Logo />
</div>
    </header>



)

}


export default NavBar