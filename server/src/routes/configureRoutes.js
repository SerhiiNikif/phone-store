import authRouter from './auth.js';
import phoneRouter from './phone.js';

export default function configureRoutes(app) {
  app.use('/auth', authRouter);
  app.use('/phones', phoneRouter);
}