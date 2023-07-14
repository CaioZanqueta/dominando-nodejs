import { Router } from 'express';

import customers from './app/controllers/CustomersController';
import contacts from './app/controllers/ContactsController';

const routes = new Router();

routes.get('/customers', customers.index);
routes.get('/customers/:id', customers.show);
routes.post('/customers', customers.create);
routes.put('/customers/:id', customers.update);
routes.delete('/customers/:id', customers.destroy);

routes.get('/customers/customersId/contacts', contacts.index);
routes.get('/customers/:customersId/contacts/:id', contacts.show);
routes.post('/customers/customersId/contacts', contacts.create);
routes.put('/customers/:customersId/contacts/:id', contacts.update);
routes.delete('/customers/:customersId/contacts/:id', contacts.destroy);

export default routes;
