import React from "react"
import styles from '@/pages/ResumeButton/ResumeButton.module.css';
import Button from "@/pages/Button/Button";

function ResumeButton({className = '', time, ...delegated}) {

    return (
        <Button className={`${styles.button} ${className}`} {...delegated}>
            <p>Resume</p>
            <img src="/eye.svg" alt="Eye"/>
        </Button>
    );
}

export default ResumeButton