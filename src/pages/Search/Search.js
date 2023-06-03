import React from 'react'
import styles from '@/pages/Search/Search.module.css'
import Input from "@/pages/Input/Input";

function Search({orderIdToSearch, setOrderIdToSearch}) {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.group}>
            <span className={styles.oval}>
            <img className={styles.searchImage} src="/search.svg" alt="Magnifying glass for the searching"/>
            </span>
            </div>
            <form className={styles.search} action="" onSubmit={e => {
                e.preventDefault();
            }}>
                <Input maxLength={20} required={true} placeholder={'Search...'} value={orderIdToSearch}
                       setValue={setOrderIdToSearch}/>
            </form>


        </div>
    )
}

export default Search