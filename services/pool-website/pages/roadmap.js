import Head from "next/head";
import RoadmapPage from "../src/app/RoadmapPage";
import schema from "../src/app/schema"

export default function Roadmap() {
    return (
        <>
            <Head>
                <title>{schema.roadmap.title} | {schema.site.title}</title>
                <meta name="description" content={schema.roadmap.description} />
            </Head>
            <RoadmapPage />
        </>
    );
}
