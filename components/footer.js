import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://stackoverflow.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Stack Overflow
          <span className={styles.logo}>
            <Image
              src="/stackoverflow-icon.svg"
              alt="Stack Overflow Logo"
              width={32}
              height={19}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default footer;
