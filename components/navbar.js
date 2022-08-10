import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          {/* <li>
        <span className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Error BlogLogo"
            width={32}
            height={19}
          ></Image>
        </span>
      </li> */}
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <li>Blog</li>
            </a>
          </Link>
          <Link href="https://github.com">
            <a target="_blank">
              <li>Git</li>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <li>Contact</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li>About</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
