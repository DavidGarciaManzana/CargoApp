import React from 'react'
import styles from '@/pages/App/App.module.css'
import Header from "@/pages/Header/Header";
import TabSelector from '@/pages/TabSelector/TabSelector';
import Search from '@/pages/Search/Search'

function App() {
    const [orderIdToSearch, setOrderIdToSearch] = React.useState("");
    React.useEffect(() => {
        console.log(orderIdToSearch)
    }, [orderIdToSearch])

    return (
        <div className={styles.appContainer}>
            <Header/>
            {/* //todo create a Main component */}
            <TabSelector/>
            <Search orderIdToSearch={orderIdToSearch} setOrderIdToSearch={setOrderIdToSearch}></Search>
        </div>
    )
}

export default App
