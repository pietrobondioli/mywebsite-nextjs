import Cors from 'cors';
import RateLimit from 'express-rate-limit';
import mailTransporter from '../../lib/nodeMailer';

// CORS MIDDLEWARE
const whitelist = ['http://localhost:3000', 'http://www.pietrobondioli.com.br'];

const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed.'));
    }
  },
});

// RATE LIMITER MIDDLEWARE
const limiter = new RateLimit({
  max: 5,
  delayMs: 0,
  message: 'Exceeded the max requests limit.',
});

// MIDDLEWARE'S HANDLER
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// API ROUTE HANDLER
const handler = async (req, res) => {
  try {
    const { body } = req;

    await runMiddleware(req, res, cors);
    await runMiddleware(req, res, limiter);

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
    res.send(info);
  } catch (err) {
    res.status(500).send({ ok: false });
  }
};

export default handler;
