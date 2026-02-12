import styles from "./Story.module.css"

export default function Story() {
    return (
        <section className={styles.story}>
            <header className={styles.storyHeader}>
                <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FStory.jpg?alt=media&token=5af9ca2f-37fc-4266-bf90-4d15b4f12332" alt="header-image" />
                <h1>story</h1>
            </header>
            <section className={styles["main-container"]}>
                <article className={`${styles.textCard} ${styles.top}`}>
                    <h2>Breeding history</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat?</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quos accusamus provident tenetur
                        perferendis tempora vero error inventore dolores! Distinctio ad cumque molestiae nemo aliquam
                        ratione at ipsa. Ratione accusantium unde quis, repellendus consequuntur quas nam sit blanditiis
                        nulla suscipit sapiente nemo iste, illum ad neque quidem natus. Dicta, laboriosam?
                    </p>
                </article>
                <article className={styles["card"]}>
                    <span className={styles["image-container"]}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FCJt1JE3RTii9njxJJBbN2w.webp?alt=media&token=9900ced9-c49b-4da2-a7ac-058544fd6417" alt="image" />
                    </span>
                    <div className={styles["text-container"]}>
                        <h2>Lorem ipsum</h2>
                        <h4>Distinctio ad cumque molestiae nemo aliquam ratione at ipsa. Ratione accusantium</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minus nostrum a fuga
                            voluptatum aperiam praesentium mollitia, cupiditate reiciendis, impedit sed illo natus eos quia
                            quos placeat, delectus similique assumenda. Itaque, aperiam deleniti? Aspernatur molestias error
                            explicabo minima aliquam illo. Aut autem enim illo consectetur voluptates eius pariatur sint
                            ipsam modi harum repellat sunt velit rem sit quo, sequi, minima adipisci sapiente. Incidunt illo
                            asperiores debitis beatae ullam provident sint!
                        </p>
                    </div>
                </article>
                <article className={`${styles.card} ${styles.reverse}`}>
                    <span className={styles["image-container"]}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/kings-of-the-balkans-storage.firebasestorage.app/o/images%2FDoberman-pinscher-dog.webp?alt=media&token=409fdd41-85f4-44c2-9160-f4acd379ad65" alt="image" />
                    </span>
                    <div className={styles["text-container"]}>
                        <h2>Lorem ipsum</h2>
                        <h4>Distinctio ad cumque molestiae nemo aliquam ratione at ipsa. Ratione accusantium</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minus nostrum a fuga
                            voluptatum aperiam praesentium mollitia, cupiditate reiciendis, impedit sed illo natus eos quia
                            quos placeat, delectus similique assumenda. Itaque, aperiam deleniti? Aspernatur molestias error
                            explicabo minima aliquam illo. Aut autem enim illo consectetur voluptates eius pariatur sint
                            ipsam modi harum repellat sunt velit rem sit quo, sequi, minima adipisci sapiente. Incidunt illo
                            asperiores debitis beatae ullam provident sint!
                        </p>
                    </div>
                </article>
                <article className={`${styles.textCard} ${styles.bottom}`}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident minus nostrum a fuga
                        voluptatum aperiam praesentium mollitia, cupiditate reiciendis, impedit sed illo natus eos quia
                        quos placeat, delectus similique assumenda. Itaque, aperiam deleniti? Aspernatur molestias error
                        explicabo minima aliquam illo.
                    </p>
                </article>
            </section>
        </section>
    );
}