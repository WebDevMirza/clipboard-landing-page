import Focus from "./Focus";
import MyData from "../assets/data/focusdata.json";
import Styles from "../styles/Action.module.css";
import Link from "next/link";

export default function Action() {
  return (
    <>
      <div className="layout-size">
        <div className={Styles["action"]}>
          <Focus data={MyData[9]} />

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
    </>
  );
}
