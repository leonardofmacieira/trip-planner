import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Descubra Sua Próxima Aventura com IA:
        </span>{" "}
        Itinerários Personalizados ao Seu Alcance
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Seu planejador de viagens pessoal e curador de viagens, criando
        itinerários personalizados de acordo com seus interesses e orçamento
      </p>

      <Link to={"/create-trip"}>
        <Button>Comece agora, É de Graça!</Button>
      </Link>

      <img src="/landing.png" className="-mt-20" />
    </div>
  );
};

export default Hero;
