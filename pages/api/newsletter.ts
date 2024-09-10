import Hubspot from '@hubspot/api-client'

export default async (req: any, res: any) => {
    const hubspotClient = new Hubspot.Client({ accessToken: process.env.HUBSPOT_APP_TOKEN })

    const contact = {
        properties: {
            firstname: req.body.first,
            lastname: req.body.last,
            email: (req.body.email as string).toLowerCase()
        },
    }

    try {
        await hubspotClient.crm.contacts.basicApi.create(contact as any)
        return res.status(201).json({ error: '' });
    } catch (error) {
        if (error.code === 409) {
            // this email address is already registered - skip it
            // TODO: better error message?
            return res.status(201).json({ error: '' });
        }

        return res.status(500).json({ error: error.message || error.toString(), });
    }
}
