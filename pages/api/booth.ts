import { IncomingWebhook } from '@slack/webhook';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

export default async (req: any, res: any) => {
    webhook.send({
        text: `Data Backup - Booth Signup
${JSON.stringify(req.body)}`,
    }).catch(error => {
        return res.status(500).json({ error: error.message || error.toString() });
    });

    {
        // save in sheets
        const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/sheets', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: '1WX6vvcCJihBJ9tFN-8AixYAyt5i1nSfMeX81gsEEwjs',
                range: 'A:AC',
                data: toDataSlice(req.body),
            }),
        })

        const { error } = await response.json()
        if (error) {
            webhook.send({
                text: `FAILURE: saving booth signup in sheets: ${error.message || error.toString()} (<@U032DKKUCLX>)`,
            }).catch(errorSlack => {
                return res.status(500).json({ error: errorSlack.message || errorSlack.toString() + ' --- ' + error.message || error.toString() });
            });

            return res.status(500).json({ error: error.message || error.toString() });
        }
    }

    {
        // send the email
        const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/gmail', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                recipient: req.body.contact.email,
                title: 'Startup Nights 2023 Booth Application',
                content: toMailContent(req.body),
            }),
        })

        const { error } = await response.json()
        if (error) {
            webhook.send({
                text: `FAILURE: sending booth signup mail: ${error.message || error.toString()} (<@U032DKKUCLX>)`,
            }).catch(errorSlack => {
                return res.status(500).json({ error: errorSlack.message || errorSlack.toString() + ' --- ' + error.message || error.toString() });
            });

            return res.status(500).json({ error: error.message || error.toString() });
        }
    }

    return res.status(201).json({ error: '' });
}

const toDataSlice = (body: any): string[] => {
    return [
        body.company.name,
        body.company.website,
        body.company.founding_date,
        body.company.linkedin.join(', '),
        body.company.employees,
        body.company.pitch,
        body.company.categories.join(', '),
        body.company.additional_categories,
        body.company.logo,
        body.company.address.street,
        body.company.address.zip,
        body.company.address.city,
        body.company.address.country,
        body.company.address_billing.street,
        body.company.address_billing.zip,
        body.company.address_billing.city,
        body.company.address_billing.country,
        body.contact.firstname,
        body.contact.lastname,
        body.contact.role,
        body.contact.email,
        body.contact.phone,
        body.varia.package.title,
        body.varia.formats.join(', '),
        body.varia.accomodation,
        body.varia.referral,
        body.varia.equipment,
        body.varia.equipment_image,
        body.varia.previous_visitor
    ]
}

const toMailContent = (body: any): string => {
    return `Hi ${body.contact.firstname} ${body.contact.lastname},

Thank you for registering a booth for ${body.company.name} at the Startup Nights 2023 in Winterthur. We are currently reviewing and confirming nominations in batches, which means you will hear from us within the next two weeks.

We know, it's a long time until November so we have some suggestions for you on how you can pass the time ⏱
- Talk to other founders / startups and invite people to the event 🚀
- Buy the tickets for you and your team and don't forget to use your discount code 20OFFspecial to get 20% off 💸 You can buy the tickets here: https://portal.startup-nights.ch
- Read the FAQ if you have open questions: https://startup-nights.ch/faq

Talk to you soon 😉

Best regards,
the Startup Nights Team`
}
