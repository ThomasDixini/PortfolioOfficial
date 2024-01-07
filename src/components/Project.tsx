import dispositivos from "../assets/dispositivos.png";
import Image from "next/image";

export function Project() {
  return (
    <article>
      <Image
        src={dispositivos}
        alt="Imagem de projeto"
        layout="responsive"
        placeholder="blur"
      />
      <span> IGNITE SHOP </span>
      <b> Uma simulação de um E-Commerce de camisetas.</b>
      <div>
        <button type="button"> Ler mais </button>
        <a href="https://shopthomas.netlify.app/" target="_blank">
          {" "}
          Link do Projeto{" "}
        </a>
      </div>
    </article>
  );
}
