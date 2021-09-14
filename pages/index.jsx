import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import Alert from "../components/alert";

export default function Home() {
    return (
        <Layout Home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
                <Link href={"/posts/firstPost"}>Ir para o primeiro post</Link>

                <Alert type={"error"}>
                   <p>teste de alerta
                   </p>
                </Alert>
            </section>
        </Layout>
    )
}
