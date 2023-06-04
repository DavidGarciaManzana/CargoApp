import React from 'react'
import styles from '@/pages/App/App.module.css'
import Header from "@/pages/Header/Header";
import TabSelector from '@/pages/TabSelector/TabSelector';
import Main from '@/pages/Main/Main'
function App() {
    const [orderIdToSearch, setOrderIdToSearch] = React.useState("");
    // React.useEffect(() => {
    //     console.log(orderIdToSearch)
    // }, [orderIdToSearch])

    return (
        <div className={styles.appContainer}>
            <Header/>
            <Main orderIdToSearch={orderIdToSearch} setOrderIdToSearch={setOrderIdToSearch}></Main>
        </div>
    )
}

export default App
