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
                title: 'Startup Nights 2024 Booth Application',
                content: email_response,
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

const email_response = `Welcome to one of the most important startup events in Switzerland.

Thank you for submitting your application for a booth at Startup Nights. We are excited to see projects that excel in creativity and sustainability, and that strive to take their startup to the next level. All applications go through a careful selection process.

We appreciate your patience while our team reviews your application. We will be in touch with you soon.

Thank you very much, and we wish you success in the selection process.

Sincerely, 
The Startup Nights Team`
