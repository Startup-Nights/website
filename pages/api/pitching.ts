import { IncomingWebhook } from '@slack/webhook';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

export default async (req: any, res: any) => {
    webhook.send({
        text: `Data Backup - Pitching Signup
${JSON.stringify(req.body)}`,
    }).catch(error => {
        return res.status(500).json({ error: error.message || error.toString() });
    });

    const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: '1ifvj7KmYvitjVGiKFceve7Zce9KlTijic2MDI_aXn9I',
            range: 'A:Z',
            data: toDataSlice(req.body),
        }),
    })

    const { error } = await response.json()
    if (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }

    return res.status(201).json({ error: '' });
}

const toDataSlice = (body: any): string[] => {
    const data: string[] = [
        body.firstname,
        body.lastname,
        body.email,
        body.startupname,
        body.website,
        body.pitchdeck,
        body.round,
        body.problem,
        body.solution,
        body.approach,
        body.user,
        body.funds,
        body.pitching,
        body.money,
        body.linkedin,
    ]
    return data
};

