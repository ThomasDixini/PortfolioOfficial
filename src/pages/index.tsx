import styles from "@/styles/home/Home.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import dispositivos from "../assets/dispositivos.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={styles.wavesPath}>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,128L40,160C80,192,160,256,240,256C320,256,400,192,480,181.3C560,171,640,213,720,197.3C800,181,880,107,960,69.3C1040,32,1120,32,1200,64C1280,96,1360,160,1400,192L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.sections}>
        <section className={styles.userSection}>
          <div className={styles.summaryUser}>
            <span> Oi✌️, Eu sou Thomás Dixini </span>
            <div className={styles.description}>
              <div className={styles.separationLinks}>
                <span> REACT </span>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <a href="" className={styles.a}>
                      {" "}
                      <FaLinkedin />{" "}
                    </a>
                  </li>
                  <li className={styles.li}>
                    <a href="" className={styles.a}>
                      {" "}
                      <FaGithubSquare />{" "}
                    </a>
                  </li>
                  <li className={styles.li}>
                    <a href="../assets/cv.pdf" download className={styles.a}>
                      {" "}
                      <GrNotes />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <span>DEVELOPER</span>
            </div>
            <p className={styles.p}>
              TENHO 21 ANOS, SOU FORMADO EM CIÊNCIAS DA COMPUTAÇÃO E ATUALMENTE{" "}
              <br />
              ESTOU ADQUIRINDO EXPERIÊNCIA COM DESENVOLVIMENTO WEB ATRAVÉS DE{" "}
              <br />
              PROJETOS PESSOAIS
            </p>
          </div>
        </section>
        <section className={styles.projectsSection}>
          <h1> Projetos </h1>
          <div className={styles.projects}>
            <article>
              <Image
                src={dispositivos}
                alt="Imagem de projeto"
                layout="responsive"
              />
              <span> ESTUDO DE CASO </span>
              <b> ASF ASF AFSAFSAFASF FASFSAFA S</b>
              <div>
                <button type="button"> Ler mais </button>
                <a href="#"> Link do Projeto </a>
              </div>
            </article>
            <article>
              <Image
                src={dispositivos}
                alt="Imagem de projeto"
                layout="responsive"
              />
              <span> ESTUDO DE CASO </span>
              <b> ASF ASF AFSAFSAFASF FASFSAFA S</b>
              <div>
                <button type="button"> Ler mais </button>
                <a href="#"> Link do Projeto </a>
              </div>
            </article>
            <article>
              <Image
                src={dispositivos}
                alt="Imagem de projeto"
                layout="responsive"
              />
              <span> ESTUDO DE CASO </span>
              <b> ASF ASF AFSAFSAFASF FASFSAFA S</b>
              <div>
                <button type="button"> Ler mais </button>
                <a href="#"> Link do Projeto </a>
              </div>
            </article>
            <article>
              <Image
                src={dispositivos}
                alt="Imagem de projeto"
                layout="responsive"
              />
              <span> ESTUDO DE CASO </span>
              <b> ASF ASF AFSAFSAFASF FASFSAFA S</b>
              <div>
                <button type="button"> Ler mais </button>
                <a href="#"> Link do Projeto </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
