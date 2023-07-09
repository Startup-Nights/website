import { IncomingWebhook } from '@slack/webhook';
import { context, tracer } from '../../instrumentation';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `
Name: ${body["firstname"]} ${body["lastname"]}
Email: ${body["email"]}
Startup: ${body["startupname"]}
Website: ${body["website"]}
Pitchdeck: ${body["pitchdeck"]}
Round: ${body["round"]}

Problem: ${body["problem"]}
Solution: ${body["solution"]}
Approach: ${body["approach"]}
User: ${body["user"]}

Raising funds: ${body["funds"]}
Pitching to others: ${body["pitching"]}

Plan to make money: ${body["money"]}
LinkedIn profiles: ${body["linkedin"]}
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
Pitching Signup ():
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
