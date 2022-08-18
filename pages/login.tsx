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
            <div style={{ height: 100 }} />
            <div className={styles.textLeft}>Log in</div>
            <div className={styles.gmailButton}>
                <div className={styles.gmail}></div>
                &nbsp;Gmail
            </div>
            <div className={styles.textLeft}>Or</div>
            <div className={styles.signupButton}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign up</div>
        </PageContainer>
    );
};

export default Login;
