import { Link } from "react-router";

export default function DogCard({
    dog
}) {
    return (
        <section>
            <img src={dog.imageUrl} alt="dig image" />
            <h3>{dog.name}</h3>
            <Link>Details</Link>
        </section>
    );
}