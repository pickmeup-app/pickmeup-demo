import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageContainer from "../components/page-container";
import styles from "../styles/common.module.css";

const Login: NextPage = () => {
    return (
        <PageContainer>
            <div className={styles.pickmeup}></div>
        </PageContainer>
    );
};

export default Login;
