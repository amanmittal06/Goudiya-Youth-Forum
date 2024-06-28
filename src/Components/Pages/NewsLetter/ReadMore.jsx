/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from './ReadMore.module.css'
 
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className={styles.text}>
            {isReadMore ? text.slice(0, 100) : text}
            <span
                onClick={toggleReadMore}
                className={styles.readOrHide}
                style={{ color: "blue" }}
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

export default ReadMore