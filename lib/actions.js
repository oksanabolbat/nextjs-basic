"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const stringIsInvalid = (str) => {
    return !str || str.trim().length == 0;
};

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
    };

    if (
        stringIsInvalid(meal.title) ||
        stringIsInvalid(meal.summary) ||
        stringIsInvalid(meal.instructions) ||
        stringIsInvalid(meal.creator) ||
        stringIsInvalid(meal.creator_email) ||
        !meal.creator_email.includes("@") ||
        !meal.image ||
        meal.image.size === 0
    ) {
        console.log("return");

        return { message: "Invalid data" };
    }
    console.log("save here");

    await saveMeal(meal);
    redirect("/meals");
}
