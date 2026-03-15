import UserContext from "../../contexts/UserContext.jsx";
import styles from "./Picture.module.css";
import { useContext } from "react";

export default function PictureCard({
    pic,
    onModal,
    onRemovePicture
}) {
    const { isAuthentcated } = useContext(UserContext)

    console.log(pic)

    return (
        <div className={styles["small-image-container"]}>
            <img src={pic.pictureUrl} alt="image" className={styles["small-image"]} onClick={() => onModal(pic.pictureUrl)} />
            {isAuthentcated ? <span className={styles.remove} onClick={onRemovePicture}>&times;</span> : ""}
        </div>
    )
}