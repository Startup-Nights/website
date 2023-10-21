import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
  apiKey: process.env.NEXT_MAILCHIMP as string,
  server: "us16",
});

// https://leerob.io/blog/mailchimp-next-js
export default async (req, res) => {
  // visible on audience -> settings -> audience name and defaults
  const list_id = "dc844d3c35";

  // https://dev.to/abdulrahman_sk/how-to-add-or-update-a-mailchimp-subscriber-using-rest-api-with-javascript-ill
  const email = (req.body.email as string).toLowerCase()
  const subscriber_hash = crypto.createHash('md5').update(email).digest('hex')

  try {
    // https://mailchimp.com/developer/marketing/api/list-members/add-or-update-list-member/
    const response_update = await mailchimp.lists.setListMember(
      list_id, 
      subscriber_hash, 
      {
        "email_address": req.body.email,
        "merge_fields": {
          "FNAME": req.body.first,
          "LNAME": req.body.last,
        },
        "status": "subscribed",
        "status_if_new": "subscribed",
      });

    // https://mailchimp.com/developer/marketing/api/list-member-tags/add-or-remove-member-tags/
    const response_tags = await mailchimp.lists.updateListMemberTags(
      list_id,
      subscriber_hash,
      {tags: [
        { name: "2023-pre-registration", status: "active" },
      ]}
    )

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
