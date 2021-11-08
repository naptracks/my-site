const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey(process.env.EMAIL_API_KEY);
const emailAddress = process.env.EMAIL_ADRESS;

export default (req, res) => {
    if(req.method === 'POST') {
        const msg= {
            to:emailAddress,
            from:emailAddress,
            subject:req.body.subject,
            text: req.body.name + '\n' + req.body.email + '\n\n' + req.body.content
        };

        sendGrid.send(msg)
            .then(result => {
                console.log(result)
                res.status(200).json({
                    success: true
                });
            })
            .catch(err => {
                console.log('error here')
                res.status(401).json({
                    success: false
                });
            });
    }
}
