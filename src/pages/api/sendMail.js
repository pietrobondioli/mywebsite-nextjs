import mailTransporter from '../../lib/nodeMailer';

const handler = async (req, res) => {
  const { body } = req;
  const info = await mailTransporter.sendMail({
    from: `pietrositeemail@gmail.com`,
    to: 'pietrositeemail@gmail.com',
    subject: `[SITE-CONTACT] - ${body.subject} - ${body.name}`,
    html: `
      <div>
        <p>
          <b>from:</b> ${body.name} ${body.lastName},
        </p>
        <p><b>email:</b> ${body.email},</p>
        <p><b>subject:</b> ${body.subject},</p>
        <div>
          <b>message:</b>
          <p>${body.message}</p>
        </div>
      </div>
    `,
  });
  if (info.accepted.length) {
    return res.json({ sended: true });
  }
  return res.json({ sended: false });
};

export default handler;
