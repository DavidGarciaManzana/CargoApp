import React from "react";
import styles from '@/pages/Button/Button.module.css';

function Button({className = '', children, ...delegated}) {
    return (
        <button className={`${styles.button} ${className}`} {...delegated} >
            {children}</button>
    );
}

export default Button