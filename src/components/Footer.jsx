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

const Footer = () => {
  return (
    <header className="flex items-center justify-center mt-2 mb-3">

<nav className="flex items-center justify-center flex-wrap mb-5">
    <motion.a href="https://twitter.com" target={"_blank"}
    whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3">
      <TwitterIcon />
      </motion.a>
      <motion.a href="https://github.com" target={"_blank"}
      whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3">
      <GithubIcon />
      </motion.a>
      <motion.a href="https://linkedin.com" target={"_blank"}
      whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">
      <LinkedInIcon />
      </motion.a>
      <motion.a href="https://facebook.com" target={"_blank"}
      whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">
      <FacebookIcon />
      </motion.a>
      <motion.a href="https://instagram.com" target={"_blank"}
      whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3">
      <InstagramIcon />
      </motion.a>

</nav>

<div className="absolute left-[50%] top-2 translate-x-[-50%]">
<Logo />
</div>
    </header>
  )
}

export default Footer