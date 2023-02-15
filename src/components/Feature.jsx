import Styles from "../styles/Feature.module.css";
import Computer from "../assets/images/image-computer.png";
import Image from "next/image";

export default function Feature({ data }) {
  return (
    <>
      <div className="layout-size">
        <div className={Styles["feature"]}>
          <div className={Styles["feature-img"]}>
            <Image src={Computer} alt="A computer image" />
          </div>
          <div className={Styles["feature-body"]}>
            {data.map((v) => {
              return (
                v.feature && (
                  <div key={v.id}>
                    <h1>{v.title}</h1>
                    <p>{v.desc}</p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
