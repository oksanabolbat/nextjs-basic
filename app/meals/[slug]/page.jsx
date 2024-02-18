import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";

export default function Meal({ params }) {
    const meal = getMeal(params.slug);
    meal.instructions = meal.instructions.replace(/\n/g, "<br>");

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image alt={meal.title} src={meal.image} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        Created by by{" "}
                        <a href={`mailto:${meal.creator}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}> {meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    );
}
