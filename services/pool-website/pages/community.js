import Head from "next/head";
import CommunityPage from "../src/app/CommunityPage";
import schema from "../src/app/schema"

export default function Community(props) {
    return (
        <>
            <Head>
                <title>{schema.community.title} | {schema.site.title}</title>
                <meta name="description" content={schema.community.description} />
            </Head>
            <CommunityPage />
        </>
    );
}
