import React from "react"
import styles from '@/pages/Input/Input.module.css';

export default function Input({className = '', value, setValue,...delegated}) {

    return (
        <>
            <input className={`${styles.input} ${className}`} value={value} onChange={(event) => {
                setValue(event.target.value)
            }}
                   {...delegated}/>
        </>
    );
}