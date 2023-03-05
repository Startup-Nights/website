import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.NEXT_MAILCHIMP as string,
    server: "us16",
});

// https://leerob.io/blog/mailchimp-next-js
export default async (req, res) => {
    // visible on audience -> settings -> audience name and defaults
    const list_id = "81a939ebc2";

    try {
        const response = await mailchimp.lists.addListMember(
            list_id, {
            "email_address": req.body.email,
            "merge_fields": {
                "FNAME": req.body.first,
                "LNAME": req.body.last,
            },
            tags: [
                "Newsletter SN23",
            ],
            "status": "subscribed",
        });

        if (response.status >= 400) {
            return res.status(400).json({
                error: `There was an error subscribing to the newsletter. Shoot us an email at [hello@startup-nights.ch] and we'll add you to the list.`
            });
        }

        return res.status(201).json({ error: '' });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
}
