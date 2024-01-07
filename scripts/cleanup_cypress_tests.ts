const mailchimp = require('@mailchimp/mailchimp_marketing')
const list_id = process.env.NEXT_MAILCHIMP_LIST
const email = 'newsletter_test@startup-nights.ch'
const subscriber_hash = require('crypto').createHash('md5').update(email).digest('hex')

function delete_mailchimp_test_subscribers() {
    mailchimp.setConfig({
        apiKey: process.env.NEXT_MAILCHIMP,
        server: 'us16'
    })

    mailchimp.lists.deleteListMember(
        list_id,
        subscriber_hash,
    )
}

delete_mailchimp_test_subscribers()
