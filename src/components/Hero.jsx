import Link from "next/link";
import Styles from "../styles/Hero.module.css";
import Logo from "../assets/images/logo.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={Styles["bg-hero"]}>
        <div className="hero-layout-size">
          <div className={Styles.hero}>
            <div className={`${Styles["hero-logo"]} flow-only`}>
              <Image src={Logo} alt="logo" />
            </div>
            <div className={Styles["hero-body"]}>
              <h1>A history of everything you copy</h1>
              <p>
                Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all
                your devices.
              </p>
            </div>
            <div className={Styles["hero-action"]}>
              <Link className={"btn btn-cyan"} href="#">
                Download for iOS
              </Link>
              <Link className="btn btn-blue" href="#">
                Download for Mac
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
