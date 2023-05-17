import { IncomingWebhook } from '@slack/webhook';
import { uploadFile } from '../../components/util/digitalocean';

const url = process.env.SLACK_WEBHOOK_URL_BOOTH as string;
const webhook = new IncomingWebhook(url);

export default async (req, res) => {
    const body = req.body

    console.log(body)

    await uploadFile(body.company.name, body.company.logo)

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
