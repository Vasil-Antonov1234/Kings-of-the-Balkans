import { useParams, Link } from "react-router";
import styles from "./Details.module.css"
import useFetch from "../../hooks/useFetch.js";

export default function Details() {
    const { dogId } = useParams();

    const { data: dog } = useFetch(`/dogs/${dogId}/details`);

    return (
        <section className={styles["wrapper"]}>
            <section className={styles["container"]}>
                <div className={styles["image-container"]}>
                    <img src={dog?.imageUrl} alt="image" className={styles["base-image"]} />
                </div>
                <div className={styles["tetx-container"]}>
                    <h1 className={styles["name"]}>{dog?.name}</h1>
                    <hr className={styles["line"]} />
                    <h2 className={styles["sub-title"]}><span className={styles["born"]}>Full name:</span> {dog?.fullName}</h2>
                    <h3><span className={styles["born"]}>Parents:</span> {dog?.parents}</h3>
                    <h3><span className={styles["born"]}>Born:</span> {dog?.dateOfBirth}</h3>
                    <h3><span className={styles["born"]}>Lorem:</span> Ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    <h3><span className={styles["born"]}>Lorem: </span> Dolor sit amet, consectetur </h3>
                    <h3><span className={styles["born"]}>Lorem: </span> Ipsum dolor sit amet, consectetur adipisicing</h3>
                    <h3><span className={styles["born"]}>Lorem: </span> Consectetur adipisicing elit</h3>
                    <h3><span className={styles["born"]}>Lorem: </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
                    <hr className={styles["line"]} />
                    {/* <div className={styles["button-container"]}>
                        <Link to={`/pictures/${dogId}/attach-picture`} className={styles["attach"]}>Attach picture</Link>
                    </div> */}
                </div>
            </section>
            <section className={styles["gallery"]}>
                <h2 className={styles["title2"]}>gallery</h2>
                <section className={styles["gallery-container"]}>
                    {dog?.pictures.length ?
                        dog?.pictures.map((x) => <div className={styles["small-image-container"]}><img src={x.pictureUrl} alt="image" key={dog._id} className={styles["small-image"]} /></div>) :
                        <p>There is nothing here yet.</p>
                    }
                </section>
            </section>
        </section>

    );
}