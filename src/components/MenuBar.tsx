import { GrProjects } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { DiCodeBadge } from "react-icons/di";
import styles from "@/styles/MenuBar.module.css";
import { useRef, useState } from "react";

interface MenuBarProps {
  active: string;
}

export function MenuBar({ active }: MenuBarProps) {
  const li = useRef<HTMLLIElement>(document.createElement("li"));

  return (
    <>
      <menu className={styles.menu}>
        <li
          ref={li}
          className={
            active == "user-resume" ? (li.current.className = "active") : ""
          }
        >
          <a
            href="#user-resume"
            className={active == "user-resume" ? "active" : ""}
          >
            <CiUser size={24} />
          </a>
        </li>
        <li className={active == "projects" ? "active" : ""}>
          <a href="#projects">
            <GrProjects size={24} />
          </a>
        </li>
        <li className={active == "skills" ? "active" : ""}>
          <a href="#skills">
            <DiCodeBadge size={24} />
          </a>
        </li>
      </menu>
    </>
  );
}
