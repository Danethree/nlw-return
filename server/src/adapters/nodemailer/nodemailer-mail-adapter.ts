import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5a524f609077dd",
      pass: "6f7bf46acb44a5"
    }
  });
export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({subject,body}: SendMailData)
    {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Daniela DOliveira <danidaninpce3@gmail.com>',
            subject,
            html: body,
             })
    }
}
