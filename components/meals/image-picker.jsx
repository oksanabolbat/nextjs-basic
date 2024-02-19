"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const imageInputRef = useRef();
    const [image, setImage] = useState();
    const handlePickClick = () => {
        imageInputRef.current.click();
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!image && <p>No image selected yet</p>}
                    {image && <Image src={image} fill alt="your image" />}
                </div>
                <input
                    type="file"
                    className={classes.input}
                    id={name}
                    name={name}
                    accept="image/png image/jpeg"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    );
}
