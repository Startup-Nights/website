import mailchimp from '@mailchimp/mailchimp_marketing';

// https://stackoverflow.com/a/72211039
export async function handler(req, res) {
    // visible on audience -> settings -> audience name and defaults
    const list_id = "81a939ebc2";

    mailchimp.setConfig({
        apiKey: process.env.SLACK_WEBHOOK_URL as string,
        server: "us16",
    });

    try {
        await mailchimp.lists.addListMember(
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
        }
        );
    } catch (err) {
        return res.status(400).send({ error: true })
    }

    return res.json({ success: true });
}

