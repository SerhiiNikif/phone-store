import phoneRouter from './phone.js';

export default function configureRoutes(app) {
  app.use('/phones', phoneRouter);
}