import mailchimp from '@mailchimp/mailchimp_marketing';

// https://stackoverflow.com/a/72211039
const handler = async (req, res) => {
    // visible on audience -> settings -> audience name and defaults
    const list_id = "81a939ebc2";

    mailchimp.setConfig({
        apiKey: process.env.NEXT_MAILCHIMP as string,
        server: "us16",
    });

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

    return response;
}


export default handler;
