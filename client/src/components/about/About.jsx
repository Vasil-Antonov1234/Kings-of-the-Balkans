import styles from "./About.module.css";
import { Link } from "react-router";

export default function About() {
    return (
        <>
            <section className={styles["hero"]}>
                <div className={styles["hero__noise"]}></div>
                <div className={styles["hero__content"]}>
                    <p className={styles["hero__eyebrow"]}>Est. 2008 · Sofia, Bulgaria</p>
                    <h2 className={styles["hero__title"]}>Bred for Excellence.</h2>
                    <h2 className={`${styles["hero__title"]} ${styles["bottom"]}`}>Built for Life.</h2>
                    <p className={styles["hero__sub"]}>We raise European Doberman Pinschers with champion bloodlines, unwavering temperament, and hearts big enough for the whole family.</p>
                </div>
                <div className={styles["hero__badge"]}>
                    <span>FCI</span>
                    <span>Registered</span>
                </div>
                <div className={styles["hero__scroll-hint"]}>Scroll ↓</div>
            </section>

            <section className={styles["mission-strip"]}>
                <div className={styles["mission-strip__item"]}>
                    <strong>15+</strong>
                    <span>Years Breeding</span>
                </div>
                <div className={styles["mission-strip__divider"]}></div>
                <div className={styles["mission-strip__item"]}>
                    <strong>200+</strong>
                    <span>Puppies Placed</span>
                </div>
                <div className={styles["mission-strip__divider"]}></div>
                <div className={styles["mission-strip__item"]}>
                    <strong>30+</strong>
                    <span>Championship Titles</span>
                </div>
                <div className={styles["mission-strip__divider"]}></div>
                <div className={styles["mission-strip__item"]}>
                    <strong>8</strong>
                    <span>Countries Represented</span>
                </div>
            </section>

            <section className={styles["story"]}>
                {/* <div className={styles["story__label"]}>Our Story</div> */}
                <Link to="/story" className={styles["story__label"]}>Our Story</Link>
                <div className={styles["story__grid"]}>
                    <div className={styles["story__image-block"]}>
                        <div className={styles["story__img-frame"]}>
                            <div className={styles["story__img-placeholder"]}>
                                <img src="https://img.freepik.com/free-photo/portrait-adorable-doberman-dog_23-2151769993.jpg?semt=ais_hybrid&w=740&q=80" alt="image" />
                            </div>
                            <div className={styles["story__img-tag"]}>Champion Lineage</div>
                        </div>
                        <div className={styles["story__accent-block"]}>
                            <p>"The Doberman is not just a dog. It is a commitment to excellence."</p>
                        </div>
                    </div>

                    <div className={styles["story__text"]} >
                        <h2>From a Passion<br />to a Legacy</h2>
                        <p>Iron Crest Dobermans was born in 2008 from a single ambition: to produce Dobermans that are not only physically extraordinary, but emotionally balanced, loyal, and built for real family life.</p>
                        <p>Founder Maria Ivanova grew up alongside working dogs in the Bulgarian countryside. Her first Doberman, Czar von Eisenberg, ignited a lifelong dedication to the breed. Within five years, Iron Crest dogs were earning Best in Show titles across Europe.</p>
                        <p>Today, our kennel is home to six adult Dobermans — each carefully selected for health, structure, drive, and most importantly, character. Every puppy we produce is a reflection of that standard.</p>
                        <Link to="/dogs" className={styles["btn btn--outline"]}>  Meet Our Dogs →</Link>
                    </div >
                </div >
            </section >

            <section className={styles["philosophy"]}>
                <div className={styles["philosophy__bg-text"]}>
                    ETHICS
                </div>
                <div className={styles["philosophy__inner"]}>
                    <div className="philosophy__header">
                        <span className={styles["section-label"]}> Our Philosophy</span>
                        <h2 className={styles["white"]}>What We Stand For</h2>
                    </div>
                    <div className={styles["philosophy__cards"]}>
                        <div className={styles["phil-card"]}>
                            <div className={styles["phil-card__icon"]}>
                                ♥
                            </div>
                            <h3>Health First</h3>
                            <p>Every breeding pair is tested for DCM (Dilated Cardiomyopathy), vWD, hip dysplasia, and eye
                                conditions. We will never compromise on health screening — ever.</p>
                        </div>
                        <div className={styles["phil-card"]}>
                            <div className={styles["phil-card__icon"]}>
                                ⚖
                            </div>
                            <h3>Temperament Tested</h3>
                            <p>Our dogs undergo formal temperament evaluations. We look for courage balanced with composure — the
                                true Doberman nature — before any breeding decision is made.</p>
                        </div>
                        <div className={styles["phil-card"]}>
                            <div className={styles["phil-card__icon"]}>
                                🏠
                            </div>
                            <h3>Family Matching</h3>
                            <p>We interview every prospective family. Our puppies go to homes that are right for the breed, and we
                                stay connected for the lifetime of each dog we produce.</p>
                        </div>
                        <div className={styles["phil-card"]}>
                            <div className={styles["phil-card__icon"]}>
                                📜
                            </div>
                            <h3>Ethical Standards</h3>
                            <p>Iron Crest is a fully FCI-registered kennel. We adhere strictly to breed standards, maintain complete
                                pedigree transparency, and never over-breed our females.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles["team"]}>
                <div className={styles["team__inner"]}>
                    <span className={styles["section-label"]}> The People</span>
                    <h2>Behind the Kennel</h2>
                    <div className={styles["team__grid"]}>
                        <div className={styles["team-card"]}>
                            <div className={styles["team-card"]}>
                                <div className={styles["team-card__photo"]}>
                                    <div className={styles["team-card__avatar"]} >
                                        JD
                                    </div>
                                </div>
                                <div className={styles["team-card__info"]}>
                                    <h3>John Doe</h3>
                                    <span className={styles["team-card__role"]}> Founder & Head Breeder</span>
                                    <p>FCI judge candidate with 15+ years experience. Specializes in European working lines and
                                        structural evaluation.</p>
                                </div>
                            </div>

                            <div className={styles["team-card"]}>
                                <div className={styles["team-card__photo"]}>
                                    <div className={styles["team-card__avatar"]} >
                                        PG
                                    </div>
                                </div>
                                <div className={styles["team-card__info"]}>
                                    <h3>Pesho Goranov</h3>
                                    <span className={styles["team-card__role"]}> Training & Socialization</span>
                                    <p>Certified Schutzhund trainer and IPO competitor. Leads all early puppy socialization and
                                        neurological stimulation protocols.</p>
                                </div>
                            </div>

                            <div className={styles["team-card"]}>
                                <div className={styles["team-card__photo"]}>
                                    <div className={styles["team-card__avatar"]}>
                                        Dr.HS
                                    </div>
                                </div>
                                <div className={styles["team-card__info"]}>
                                    <h3>Dr. Henry Scot</h3>
                                    <span className={styles["team-card__role"]}> Veterinary Partner</span>
                                    <p>Specialist in canine cardiology. Conducts all health screenings and provides ongoing veterinary
                                        oversight for our breeding program.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <section className={styles["cta"]}>
                <div className={styles["cta__inner"]}>
                    <h2>Ready to Welcome<br />a Doberman?</h2>
                    <p>We occasionally have litters available. Reach out to start a conversation — we'd love to learn about your
                        family.</p>
                    <Link to="/contacts" className={styles["btn btn--gold"]}> Contact Us Today</Link>
                </div>
            </section >
        </>
    );
}