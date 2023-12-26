import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { Opacity } from "@mui/icons-material";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.cont}>
        <div className={styles.links}>
          <div>
            <Image src="/logo-no-bg.png" width={200} height={200} alt="LOGO" className={styles.flogo} />
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Book Appointment</Link>
              </li>
              <li>
                <Link href="/">Suggest Change</Link>
              </li>
              <li>
                <Link href="/">Browse</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>More</h5>
            <ul>
              <li>
                <Link href="/">Track Appointment</Link>
              </li>
              <li>
                <Link href="/">Be a Visitor / Sign Up</Link>
              </li>
              <li>
                <Link href="/">Already a Visitor / Sign In</Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h5>Developer</h5>
            <ul>
              <li>
                <Link href="/">Get a Website</Link>
              </li>
              <li>
                <Link href="/">Be a Partner</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li>
                <Link href="/">Terms And Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
            <span className={styles.left}>Cell: 7051499639</span>
            <span className={styles.right}>Email: email@email.com</span>
        </div>
        <div style={{opacity:"0.6"}} className={styles.copy}>
            Copyright &copy; https://golden-hands.in || All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
