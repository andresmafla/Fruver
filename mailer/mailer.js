import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: 'surtifruver977@gmail.com',
        pass: 'ncefuoppwdgmntwv'
    }
});

transporter.verify().then(() => {
    console.log("Listo para enviar emails");
});

