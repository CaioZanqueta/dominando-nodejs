import * as Yup from 'yup';
import { Op } from 'sequelize';
import { parseISO } from 'date-fns';

import Customer from '../models/Customer';
import Contact from '../models/Contact';

class ContactsController {
  async index(req, res) {
    const {
      name,
      email,
      status,
      createdBefore,
      createdAfter,
      updatedBefore,
      updatedAfter,
      sort,
    } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};
    let order = [];

    if (name) {
      where = {
        ...where,
        name: {
          [Op.iLike]: name,
        },
      };
    }

    if (email) {
      where = {
        ...where,
        email: {
          [Op.iLike]: email,
        },
      };
    }

    if (status) {
      where = {
        ...where,
        status: {
          [Op.in]: status.split(',').map((item) => item.toUpperCase()),
        },
      };
    }

    if (createdBefore) {
      where = {
        ...where,
        createdAt: {
          [Op.gte]: parseISO(createdBefore),
        },
      };
    }

    if (createdAfter) {
      where = {
        ...where,
        createdAt: {
          [Op.lte]: parseISO(createdAfter),
        },
      };
    }

    if (updatedBefore) {
      where = {
        ...where,
        updatedAt: {
          [Op.gte]: parseISO(updatedBefore),
        },
      };
    }

    if (updatedAfter) {
      where = {
        ...where,
        updatedAt: {
          [Op.lte]: parseISO(updatedAfter),
        },
      };
    }

    if (sort) {
      order = sort.split(',').map((item) => item.split(':'));
    }

    const data = await Contact.findAll({
      where,
      include: [
        {
          model: Customer,
          attributes: ['id', 'status'],
          required: true,
        },
      ],
      order,
      limit,
      offset: limit * page - limit,
    });
    return res.json(data);
  }

  async show(req, res) {
    const contact = await Contact.findByPk(req.params.id);

    if (!contact) {
      return res.status(404).json();
    }

    return res.json(contact);
  }
}

export default ContactsController;
