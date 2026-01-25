import { useParams } from "react-router";
import styles from "./Details.module.css"
import useFetch from "../../hooks/useFetch.js";

export default function Details() {
    const { dogId } = useParams();

    const { data: dog } = useFetch(`/dogs/${dogId}/details`);

    return (
        <section className={styles["wrapper"]}>
            <section className={styles["container"]}>
                <div className={styles["image-container"]}>
                    <img src={dog?.imageUrl}
                        alt="image" className={styles["base-image"]} />
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
                </div>
            </section>
            <section className={styles["gallery"]}>
                <h2 className={styles["title2"]}>gallery</h2>
                <section className={styles["gallery-container"]}>
                    <img src="https://headsupfortails.com/cdn/shop/articles/Doberman_Pinscher_Dog_Breed_Information_2a31ffd8-3d3f-4dc2-b495-fbc47dd27ef3.jpg?v=1741084702" alt="image" className={styles["small-image"]} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmlr3bxXifzBy5h5oiDHLztuGgPEr06-mWHg&s" alt="image" className={styles["small-image"]} />
                    <img src="https://headsupfortails.com/cdn/shop/articles/Doberman_Pinscher_Dog_Breed_Information_2a31ffd8-3d3f-4dc2-b495-fbc47dd27ef3.jpg?v=1741084702" alt="image" className={styles["small-image"]} />
                    <img src="https://headsupfortails.com/cdn/shop/articles/Doberman_Pinscher_Dog_Breed_Information_2a31ffd8-3d3f-4dc2-b495-fbc47dd27ef3.jpg?v=1741084702" alt="image" className={styles["small-image"]} />
                    <img src="https://headsupfortails.com/cdn/shop/articles/Doberman_Pinscher_Dog_Breed_Information_2a31ffd8-3d3f-4dc2-b495-fbc47dd27ef3.jpg?v=1741084702" alt="image" className={styles["small-image"]} />
                    <img src="https://headsupfortails.com/cdn/shop/articles/Doberman_Pinscher_Dog_Breed_Information_2a31ffd8-3d3f-4dc2-b495-fbc47dd27ef3.jpg?v=1741084702" alt="image" className={styles["small-image"]} />
                    <img src="https://headsupfortails.com/cdn/shop/articles/Doberman_Pinscher_Dog_Breed_Information_2a31ffd8-3d3f-4dc2-b495-fbc47dd27ef3.jpg?v=1741084702" alt="image" className={styles["small-image"]} />
                </section>
            </section>
        </section>

    );
}