import Image from "next/image";
import Styles from "../styles/Company.module.css";
import GoogleIcon from "../assets/images/logo-google.png";
import IbmIcon from "../assets/images/logo-ibm.png";
import MicrosoftIcon from "../assets/images/logo-microsoft.png";
import HpIcon from "../assets/images/logo-hp.png";
import VectorIcon from "../assets/images/logo-vector-graphics.png";

export default function Company() {
  return (
    <>
      <div className="company-layout-size">
        <div className={Styles["company"]}>
          <Image src={GoogleIcon} alt="google icon" />
          <Image src={IbmIcon} alt="ibm icon" />
          <Image src={MicrosoftIcon} alt="microsoft icon" />
          <Image src={HpIcon} alt="hp icon" />
          <Image src={VectorIcon} alt="vector icon" />
        </div>
      </div>
    </>
  );
}
