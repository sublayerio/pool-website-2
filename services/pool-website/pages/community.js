import Head from "next/head";
import CommunityPage from "../src/app/CommunityPage";

export default function Community(props) {
    return (
        <>
            <Head>
                <title>Community | Sublayer Pool</title>
            </Head>
            <CommunityPage />
        </>
    );
}
