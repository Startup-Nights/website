import { Button } from "../items/button";

export default function CTA({ data }) {
    return (
        <Button text={data.cta.text} link={data.cta.link}></Button>
    )
}
