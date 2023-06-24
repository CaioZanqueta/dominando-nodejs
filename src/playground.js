import { Op } from 'sequelize';
import './database';

import Customer from './app/models/Customer';
import Contact from './app/models/Contact';

class Playground {
  static async play() {
    // const customer = await Customer.findByPk(1);

    // const customer = await Customer.findOne({
    //   attributes: { exclude: ['status'] },
    // });

    const customers = await Customer.findAll({
      include: [Contact],
      where: {
        status: {
          [Op.in]: ['ACTIVE', 'ARCHIVED'],
        },
        // name: {
        //   [Op.like]: 'Dev%',
        // },
        createdAt: {
          [Op.between]: [new Date(2023, 1, 1), new Date()],
        },
      },
    });

    console.log(JSON.stringify(customers, null, 2));
    // console.log(JSON.stringify(customer, null, 2));
  }
}

Playground.play();
