import { IncomingWebhook } from '@slack/webhook';
import { context, tracer } from '../../instrumentation';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `Company: ${body["company"]}
Budget: ${body["budget"]}
Name: ${body["firstname"]} ${body["lastname"]}
Email: ${body["email"]}
Idea: ${body["idea"]}
`
};

export default async (req, res) => {
    const span = tracer.startSpan('newsletter', undefined, context.active());
    const body = req.body
    if (!body.email) {
        res.redirect(302, '/404')
    }

    webhook.send({
        text: `
Partner Signup (<@U03TJDGS2R3>):
${stringify(body)}
`,
    }).then(() => {
        span.end()
        return res.status(201).json({ error: '' });
    }).catch(error => {
        span.end()
        return res.status(500).json({ error: error.message || error.toString() });
    });
}
