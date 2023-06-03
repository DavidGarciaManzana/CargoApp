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

            </Head>
            <App></App>
        </>
    )
}
