import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import styles from "../styles/common.module.css";
import Header from "./header";
import HeaderDefault from "./header-default";

interface PageContainerProps extends PropsWithChildren {
    hideFooter?: boolean;
    headerType?: "init" | "default";
}

const PageContainer: React.FC<PageContainerProps> = ({ children, hideFooter, headerType = "default" }) => {
    useEffect(() => {
        screen.orientation.lock("portrait");
    }, []);
    let header = <Header />;
    if (headerType === "default") {
        header = <HeaderDefault />;
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Pick Me Up</title>
                <meta name="description" content="Pick Me Up Demo" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {header}
            <div className={styles.content}>{children}</div>
            {!hideFooter && <div className={styles.footer} />}
        </div>
    );
};

export default PageContainer;
