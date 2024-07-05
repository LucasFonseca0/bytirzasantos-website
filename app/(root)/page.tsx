import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CarouselSection from "../Components/CarouselSection";


export default function Home() {
  return (
    <main className="text-gray-900">
      <header className="flex h-60 justify-around items-center">
        <h1 className="text-3xl font-semibold text-gold">bytirzasantos</h1>
        <Avatar className="w-32 h-32">
          <AvatarImage src="/images/photo1.jpg" alt="bytirzasantos image" />
          <AvatarFallback>BZ</AvatarFallback>
        </Avatar>
      </header>
      <section className="flex flex-col items-center sm:px-[17%]">
      <div className="w-full md:max-w-[750px] h-[50vh] max-h-[500px] md:min-h-[500px] bg-[url('/images/photo2.png')] bg-cover bg-top bg-no-repeat rounded"></div>
        <div className="flex flex-col items-start md:max-w-[750px] p-[17%] sm:p-0">
          <h2 className="font-bold my-8 text-3xl ">Quem sou eu?</h2>
          <p className="text-xl [&>span]:highlight">
            Olá, meu nome é Tirza e atuo na área do <span>marketing há 7 anos</span>. Sou social media manager, estrategista, designer gráfico. <span>Não espere pela oportunidade</span>, crie! Vamos juntas deixar sua marca no mundo?
          </p>
        </div>
      </section>
      <CarouselSection/>
    </main>
  ); 
}
