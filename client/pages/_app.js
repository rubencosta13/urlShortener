import React, { useEffect} from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import buildClient from '../api/build-client';


const MyApp = ({Component, pageProps, currentUser}) => {
    return (
        <div>
            <Head>
                <title>Shortener.dev - Fastest URL shortener</title>
                <link rel="icon" type="image/x-icon" href="/assets/logo.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Layout currentUser={currentUser}>
                <Component {...pageProps}/>
            </Layout>
        </div>
    )
}


MyApp.getInitialProps = async (appContext) => {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get("/auth/currentuser");

    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    };
    return {
        pageProps,
        ...data
    }
};


export default MyApp