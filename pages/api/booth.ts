import { IncomingWebhook } from '@slack/webhook';

const url = process.env.SLACK_WEBHOOK_URL_BOOTH as string;
const webhook = new IncomingWebhook(url);

export default async (req, res) => {
    const body = req.body

    // TODO
    // if (body.images?.logo) {
    //     await uploadFile(body.company.name, body.images.logo.data, body.images.logo.name)
    // }

    await webhook.send({
        text: `New booth signup received`,
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `${JSON.stringify(body)}`
                }
            },
        ],
    })

    res.status(200).json({ error: '' });
}