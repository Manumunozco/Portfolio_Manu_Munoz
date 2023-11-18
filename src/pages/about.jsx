import Head from "next/head";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/images/profile/nzjob.jpg";
import profilePhoto from "../../public/images/profile/code.jpg";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Head>
        <title>Manuel Munoz Conejeros</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <AnimatedText
          text="About Me"
          className="mt-16 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-3 gap-16 sm:gap-5">
          <p className="mt-15 mb-10 ml-10 mr-10 font-medium xl:col-span-4">
            ¡Hi! I am Manu, a Full Stack Software Developer student, apasionado
            por desarrollo full-stack de software, mi objetivo es fusionar la
            creatividad y la solidez técnica para construir soluciones
            innovadoras y eficientes. Busco oportunidades desafiantes que me
            permitan aplicar y expandir mis conocimientos en el desarrollo web y
            móvil. Mi enfoque es aprender continuamente, colaborar con equipos
            talentosos y contribuir al mundo digital con soluciones que impacten
            positivamente en la experiencia del usuario y en la eficiencia
            empresarial.
          </p>
          <p className="mt-15 mb-10 ml-10 mr-10 xl:col-span-4">
            Ingeniero Comercial de profesion, titulado en Universidad Santo
            Tomas, Chile. Ejerciendo unos años en diversas empresas Chilenas.
            Años despues, emigre a Nueva Zelanda. En esta nueva aventura conoci
            a una hermosa mujer, formamos una familia que actualmente mantenemos
            felizmente. Profesionalmente, por la falta de idioma, comence de
            cero. En esta ocación me incline por construccion, realice diversas
            actividades, oficios y roles. Varios años despues, con el idioma
            manejado, pude calificarme, obetener la residencia y establecerme.
          </p>
          <div>
            <Image
              src={profilePic}
              alt="nzjob"
              width={350}
              height={300}
              className="mt-15 mb-10 ml-10 mr-10 xl:col-span-4"
            />
          </div>
          <div>
            <Image
              src={profilePhoto}
              alt="web"
              width={350}
              height={350}
              className="mt-15 mb-10 ml-10 mr-10 xl:col-span-4"
            />
          </div>
          <p className="mt-15 mb-10 ml-10 mr-10 xl:col-span-4">
            Como proyecto familiar, decidimos invertir tiempo y dinero en
            comenzar este nuevo desafio. Decidi sumergirme en el area de IT,
            especificamente en el desarrollo de software, siempre me llamo mucho
            la atencion el entender como se construia todo, la manera que se
            ejecutaba por atras. Ademas, las miles de cosas que se pueden hacer
            en esta area.
          </p>
          <p className="mt-15 mb-10 ml-10 mr-10 font-medium xl:col-span-4">
            ¡Estoy emocionado por el viaje que me espera y por las oportunidades
            de crecimiento y aprendizaje que encontraré en mi trayectoria como
            desarrollador full-stack!
          </p>
        </div>
      </main>
    </>
  );
};

export default about;
