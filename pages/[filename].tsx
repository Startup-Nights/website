import { Blocks } from "../components/blocks-renderer";
import { useTina } from "tinacms/dist/react";
import { Layout } from "../components/layout";
import { client } from "../.tina/__generated__/client";

export default function HomePage(
    props: AsyncReturnType<typeof getStaticProps>["props"]
) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });

    return (
        <Layout data={data.global as any}>
            <div className="pt-12 lg:pt-20"></div>
            <Blocks {...data.page} />
        </Layout >
    );
}


export const getStaticProps = async ({ params, locale }) => {
    try {
        const tinaProps = await client.queries.contentQuery({
            relativePath: `${locale}/${params.filename}.md`,
        });
        return {
            props: {
                ...tinaProps
            },
        };
    } catch {
        // fallback to the default locale
        // TODO: get default locale from next.config.js and/or redirect
        const tinaProps = await client.queries.contentQuery({
            relativePath: `en/${params.filename}.md`,
        });
        return {
            props: {
                ...tinaProps
            },
        };
    }
};

export const getStaticPaths = async ({ locales }) => {
    const pageConnection = await client.queries.pageConnection();
    const paths = [];

    pageConnection.data.pageConnection.edges.map((page: any) => {
        locales.map((locale: any) => {
            paths.push({
                params: { filename: page.node._sys.filename },
                locale,
            });
        });
    });

    return {
        paths,
        fallback: true,
    }
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;
