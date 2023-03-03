import { NextPage } from "next"
import { Layout } from "../components/layout";
import { useRouter } from "next/router";
import { Section } from "../components/util/section";
import { Container } from "../components/util/container";
import CTA from "../components/blocks/cta";

const Success: NextPage = () => {
    const { query } = useRouter();

    return (
        <Layout>
            <Section>
                <Container>
                    <div className="content grid grid-cols-1 gap-8 content-center lg:grid-cols-2">
                        <div className="grid content-center">
                            <div>
                                <img src='/gifs/party.gif' className="image" width={480} height={400} />
                            </div>
                        </div>
                        <div className="grid content-center">
                            <div>
                                <h1 className="h3">{query.titel}</h1>
                                <p className="p">{query.text}</p>

                                <CTA data={{
                                    cta: {
                                        link: "/",
                                        text: "Home"
                                    }
                                }} />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    )
}


export default Success;
