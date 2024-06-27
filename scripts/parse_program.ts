import * as fs from 'fs';
import * as pako from 'pako';

const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

fetch('https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-70cb3437-eee1-474d-8ad6-387035b15671/website/program', {
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        url: 'https://portal.startup-nights.ch/components/28350',
    }),
}).then(response => {
    response.json().then(data => {
        const decoded = Uint8Array.from(Array.from(decode(data.data)).map(letter => letter.charCodeAt(0)))
        fs.writeFile('program_data.json', pako.inflate(decoded, { to: 'string' }), function(err: any) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    })
})

