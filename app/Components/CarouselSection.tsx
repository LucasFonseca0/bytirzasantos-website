"use client";

import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import Image from 'next/image';

interface CarouselItensInterface {
  title: string;
  description: string;
  imageURL: string;
  LinkURL: string;
  LinkText: string;
}

const CaroulselItens: CarouselItensInterface[] = [
  {
    title: "GERENCIAMENTO GOLD",
    description: "Está sem tempo para cuidar das redes sociais do seu negócio? Então, Deixa comigo",
    imageURL: "/CarouselImages/photo3.png",
    LinkURL: "https://docs.google.com/forms/d/e/1FAIpQLSd8iQC6NJsaFrvpV64yrBCfjuqr5l6dvQd9vlC4ErIWGeSw1w/viewform",
    LinkText: "Formúlario"
  },
  {
    title: "CG - CONSULTORIA GOLD",
    description: "Sente que está precisando de dar um UP no seu perfil? a CG pode te ajudar",
    imageURL: "/CarouselImages/photo4.png",
    LinkURL: "https://api.whatsapp.com/send/?phone=5573988893577&text=Ol%C3%A1+Tirza%2C+eu+quero+contratar+a+sua+consultoria&type=phone_number&app_absent=0",
    LinkText: "Entre em contato"
  },
  {
    title: "INSTAGOLD IDV",
    description: "Invista no seu negócio e tenha um perfil intencional com uma Identidade marcante",
    imageURL: "/CarouselImages/photo1.png",
    LinkURL: "https://pay.kiwify.com.br/Icsy5Gi",
    LinkText: "Eu quero"
  },
  {
    title: "MGS E-BOOK",
    description: "O meu método para otimizar seu perfil, com estratégias de conteúdos e desafios.",
    imageURL: "/CarouselImages/photo2.png",
    LinkURL: "https://metodogoldspark.my.canva.site/",
    LinkText: "Quero o método"
  },
]

const CarouselSection = () => {
  const plugin = useRef<AutoplayType | null>(null);

  useEffect(() => {
    plugin.current = Autoplay({ delay: 3000, stopOnInteraction: true });
  }, []);

  return (
    <section className='flex flex-col items-center mb-40 '>
      <h2 className='text-lg sm:text-xl font-semibold mt-10 mb-8 text-gold'>Produtos que você precisa conhecer:</h2>
      <Carousel
        plugins={plugin.current ? [plugin.current] : []}
        className="w-[70%] md:w-full md:max-w-xl lg:max-w-3xl "
        onMouseEnter={() => plugin.current && plugin.current.stop()}
        onMouseLeave={() => plugin.current && plugin.current.reset()}
      >
        <CarouselContent>
          {CaroulselItens.map((item, index) => (
            <CarouselItem key={index} className='basis-2/3 sm:basis-1/2 '>
              <div className=" bg-primary-foreground rounded border-[1px] border-gold">
                <Image src={item.imageURL} alt={`imagem do produto ${item.title}`} width={4000} height={4000} className='rounded'></Image>
                <div className='p-4'>
                  <h3 className='text-base sm:text-lg font-semibold mb-4 text-gold'>{item.title}</h3>
                  <p className='mb-10'>{item.description}</p>
                  <a href={item.LinkURL} className=' underline font-semibold text-gold'>{item.LinkText}</a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselSection;
