import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import PageContainer from "../components/page-container";
import styles from "../styles/common.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.pageIndex}>
            <PageContainer>
                <div className={styles.pickmeup}></div>
            </PageContainer>
        </div>
    );
};

export default Home;
