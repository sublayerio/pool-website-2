import Head from "next/head";
import DelegatePage from "../src/app/DelegatePage";

export default function Delegate(props) {
    return (
        <>
            <Head>
                <title>Delegate | Sublayer Pool</title>
            </Head>
            <DelegatePage />
        </>
    );
}