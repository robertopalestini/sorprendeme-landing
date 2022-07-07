import * as React from 'react';
import Head from 'next/head';
import '../styles/App.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Sorprendeme | Busqueda avanzada e inteligente</title>

                <meta property="og:title" content="Sorprendeme" key="title" />

                <meta charset="utf-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="theme-color" content="#000000" />

                <meta

                    name="description"

                    content="Compañia argentina apasionada por la innovación! Con más de 25 aos de experiencia y trayectoria"

                />

                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />

                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap" rel="stylesheet" />

                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}