// import { Op } from 'sequelize';
import './database';

import Customer from './app/models/Customer';
// import Contact from './app/models/Contact';

class Playground {
  static async play() {
    // const customer = await Customer.findByPk(1);
    // const customer = await Customer.findOne({
    //   attributes: { exclude: ['status'] },
    // });
    // const customers = await Customer.findAll({
    //   include: [
    //     {
    //       model: Contact,
    //       where: {
    //         status: 'ACTIVE',
    //       },
    //       required: false,
    //     },
    //   ],
    //   where: {
    //     status: {
    //       [Op.in]: ['ACTIVE', 'ARCHIVED'],
    //     },
    //     // name: {
    //     //   [Op.like]: 'Dev%',
    //     // },
    //     createdAt: {
    //       [Op.between]: [new Date(2023, 1, 1), new Date()],
    //     },
    //   },
    //   order: [['name', 'DESC'], ['createdAt']],
    //   limit: 2,
    //   offset: 2 * 2 - 2, // list * page - limit
    // });
    // const customers = await Customer.scope({
    //   method: ['created', new Date(2023, 1, 1)],
    // }).findAll();
    // const customers = await Customer.scope(['active', 'archived']).findAll();
    // console.log(JSON.stringify(customers, null, 2));

    const customer = await Customer.create({
      name: 'Supermercado Zazá',
      email: 'suporte@zaza.com.br',
    });

    console.log(JSON.stringify(customer, null, 2));

    // const customer = await Customer.findByPk(1);
    // console.log('Antes: ', JSON.stringify(customer, null, 2));

    // const newCustomer = await customer.update({ status: 'ARCHIVED' });
    // console.log('Depois: ', JSON.stringify(newCustomer, null, 2));

    // const customer = await Customer.findByPk(11);
    // customer.destroy();
  }
}

Playground.play();
