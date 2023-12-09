import { GrProjects } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { DiCodeBadge } from "react-icons/di";
import styles from "@/styles/MenuBar.module.css";
import { useRef, useState } from "react";

interface MenuBarProps {
  active: string;
  setActive: (data: string) => void;
}

export function MenuBar({ active, setActive }: MenuBarProps) {
  return (
    <>
      <menu className={styles.menu}>
        <li className={active == "user-resume" ? styles.active : ""}>
          <a
            href="#user-resume"
            className={active == "user-resume" ? "active" : ""}
            onClick={() => setActive("user-resume")}
          >
            <CiUser size={16} />
          </a>
        </li>
        <li className={active == "projects" ? styles.active : ""}>
          <a href="#projects" onClick={() => setActive("projects")}>
            <GrProjects size={16} />
          </a>
        </li>
        <li className={active == "skills" ? styles.active : ""}>
          <a href="#skills" onClick={() => setActive("skills")}>
            <DiCodeBadge size={16} />
          </a>
        </li>
      </menu>
    </>
  );
}
