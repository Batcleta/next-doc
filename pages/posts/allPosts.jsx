import {getSortedPostsData} from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Alert from "../../components/alert";
import Layout from "../../components/layout";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


export default function AllPosts({ allPostsData }) {

    console.log(allPostsData)
    return (
        <Layout AllPosts>
            {/* Keep the existing code here */}

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

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title, content }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                            <br/>
                            {content}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
