import React from 'react'
import styles from '@/pages/App/App.module.css'
import Header from "@/pages/Header/Header";
import TabSelector from '@/pages/TabSelector/TabSelector';
function App() {
    return (
        <div className={styles.appContainer}>
        <Header/>
            <TabSelector></TabSelector>
        </div>
    )
}

export default App
