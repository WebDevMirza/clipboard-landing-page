import Styles from "../styles/Service.module.css";
import BlackListsIcon from "../assets/images/icon-blacklist.svg";
import SnippetsIcon from "../assets/images/icon-text.svg";
import PreviewIcon from "../assets/images/icon-preview.svg";
import Image from "next/image";

const getIcon = (itemName) => {
  if (itemName === "blacklists") {
    return BlackListsIcon;
  } else if (itemName === "snippets") {
    return SnippetsIcon;
  } else {
    return PreviewIcon;
  }
};

export default function Service({ data }) {
  return (
    <>
      <div className="layout-size">
        <div className={Styles["service"]}>
          {data.map((v) => {
            return (
              v.service && (
                <div key={v.id}>
                  <div>
                    <Image src={getIcon(v.itemName)} alt="" />
                  </div>
                  <h1 className="h3">{v.title}</h1>
                  <p>{v.desc}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}
