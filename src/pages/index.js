import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import App from "@/pages/App/App";

export default function Home() {
    return (
        <>
            <Head>
                <title>Bego cargo app by David Garcia</title>
                <meta name="description" content="A cargo app that tracks trucks online"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/yellow-logo.jpg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <App></App>
        </>
    )
}
