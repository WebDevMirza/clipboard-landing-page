import Styles from "../styles/Focus.module.css";

export default function Focus({ data }) {
  return (
    <>
      <div className="layout-size">
        <div className={Styles.focus}>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
        </div>
      </div>
    </>
  );
}
