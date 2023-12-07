import styles from "@/styles/home/Home.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.userSection}>
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
                <a href="" className={styles.a}>
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
          ESTOU ADQUIRINDO EXPERIÊNCIA COM DESENVOLVIMENTO WEB ATRAVÉS DE <br />
          PROJETOS PESSOAIS
        </p>
      </section>
    </main>
  );
}
