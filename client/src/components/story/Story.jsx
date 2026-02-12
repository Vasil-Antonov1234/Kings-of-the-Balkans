import styles from "./Story.module.css"

export default function Story() {
    return (
        <section className={styles.story}>
            <header className={styles.storyHeader}>
                <img src="../../../public/images/Story.jpg" alt="header-image" />
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
                        <img src="../../../public/images/Female.jpg" alt="image" />
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
                        <img src="../../../public/images/Male.avif" alt="image" />
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