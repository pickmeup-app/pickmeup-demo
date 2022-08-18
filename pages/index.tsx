import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import PageContainer from "../components/page-container";
import styles from "../styles/common.module.css";

const Home: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        const t = setTimeout(() => router.push("/login"), 2000);
        return () => {
            clearTimeout(t);
        };
    }, [router]);

    return (
        <div className={styles.pageIndex}>
            <PageContainer hideFooter headerType={"init"}>
                <div className={styles.pickmeup}></div>
            </PageContainer>
        </div>
    );
};

export default Home;
