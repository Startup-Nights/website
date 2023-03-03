import { IncomingWebhook } from '@slack/webhook';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `Company: ${body["company"]}
Budget: ${body["budget"]}
Name: ${body["first-name"]} ${body["last-name"]}
Email: ${body["email"]}
Idea: ${body["idea"]}
`
};

export default function handler(req: any, res: any) {
    const body = req.body

    if (!body.email) {
        res.redirect(302, '/404')
    }

    webhook.send({
        text: `Partner Signup (<@U03TJDGS2R3>): ${stringify(body)}`,
    }).then(() => {
        const params = new URLSearchParams({
            titel: 'Thanks for your message',
            text: 'Our partner team will get in touch soon.',
        }).toString();
        res.redirect(302, `/success?${params}`)
    }).catch(() => {
        res.redirect(302, `/500`)
    });
}
