"use client";

import { forwardRef } from "react";

import styles from './CreatePostBox.module.css';
import ModalPostBlog from "@/components/post/ModalPostBlog";

const CreatePostBox = forwardRef((props, ref) => {
    return (
        <div className={styles.content}>
            <img
                src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
                className={styles.photo}
                alt="Imagem de capa"
            />
            <button
                onClick={() => ref.current.showModal()}
                className={styles.buttonField}
            >
                No que você está pensando, Max?
            </button>
            <ModalPostBlog ref={ref} />
        </div>
    );
});

export default CreatePostBox;
