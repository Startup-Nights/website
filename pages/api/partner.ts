export default async (req: any, res: any) => {
    const response = await fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/gmail', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            recipient: 'tabita.sager@gmail.com',
            title: 'Partner Anmeldung',
            content: stringify(req.body),
        }),
    })

    const { error } = await response.json()
    if (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }

    return res.status(201).json({ error: '' });
}

const stringify = (body: any): string => {
    return `Anmeldung als Partner

Firma:
${body.company}

Ansprechsperson:
${body.firstname} ${body.lastname}
${body.email}

Budget:
${body.budget} CHF

Interessen:
${body.interests}
`
}
