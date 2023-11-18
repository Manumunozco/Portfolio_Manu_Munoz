import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project1.jpeg";
import project2 from "../../public/images/projects/project2.jpg";
import project3 from "../../public/images/projects/project3.jpg";
import project4 from "../../public/images/projects/project4.jpg";

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto object-cover m-5 p-5"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span className="font-medium text-xl">{type}</span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
            {title}
          </h2>
        </a>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
      </div>
      <div className="mt-2 flex items-center">
        <Link href={github} target="_blank" className="w-10">
          {" "}
          <GithubIcon />{" "}
        </Link>
        <Link
          href={link}
          target="_blank"
          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold underline"
        >
          Visit our project
        </Link>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Manuel Munoz Conejeros</title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <AnimatedText
          text="My Projects"
          className="mt-16 mb-16 text-4xl sm:!text-5xl lg:!text-6xl xl:!text-7xl"
        />
        <div className="grid grid-cols-12 gap-24 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
          <div className="col-span-12"></div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Sale Landing Static Page"
              img={project1}
              link="https://oli-boards.netlify.app/"
              github="https://github.com/Manumunozco/Oli-Boards.git"
              type="First Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="DashBoard-consuming APIS"
              img={project3}
              link="https://dashboard-project3.netlify.app/"
              github="https://github.com/Manumunozco/PROJECT3-DASHBOARD.git"
              type="Apis Job"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Local storage-CRUD"
              img={project2}
              link="https://air-udd.netlify.app/"
              github="https://github.com/Manumunozco/AIR-UDD.git"
              type="JavaScript Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="ReactJs-APP"
              img={project4}
              link="https://project-4-react.netlify.app/"
              github="https://github.com/Manumunozco/P4-React.git"
              type="React"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
