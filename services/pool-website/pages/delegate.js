import Head from "next/head";
import DelegatePage from "../src/app/DelegatePage";
import schema from "../src/app/schema"

export default function Delegate() {
    return (
        <>
            <Head>
                <title>{schema.delegate.title} | Sublayer Pool</title>
                <meta name="description" content={schema.delegate.description} />
            </Head>
            <DelegatePage />
        </>
    );
}