import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import styles from "../styles/common.module.css";
import Header from "./header";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
    useEffect(() => {
        screen.orientation.lock("portrait");
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Pick Me Up</title>
                <meta name="description" content="Pick Me Up Demo" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles.content}>{children}</div>
            <div className={styles.footer} />
        </div>
    );
};

export default PageContainer;
