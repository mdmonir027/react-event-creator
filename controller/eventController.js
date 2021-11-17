const { internalServerError } = require('../utils/errorResponses');
const Event = require('../models/Event');
const moment = require('moment');
const controller = {
  create: async (req, res) => {
    try {
      const {
        name,
        address,
        city,
        country,
        description,
        owner,
        coordinates,
        ticket_price,
        date_from,
        date_to,
        time_from,
        time_to,
        source_url,
        rating,
        created_by,
      } = req.body;

      const data = {
        name,
        address: address || null,
        city: city || null,
        country: country || null,
        description,
        owner: owner || null,
        coordinates: coordinates || null,
        ticket_price: ticket_price || null,
        date_from: moment(date_from).format('YYYY-MM-MM HH:mm:ss'),
        date_to: moment(date_to).format('YYYY-MM-MM HH:mm:ss') || null,
        time_from: moment(time_from).format('YYYY-MM-MM HH:mm:ss') || null,
        time_to: moment(time_to).format('YYYY-MM-MM HH:mm:ss') || null,
        source_url,
        rating: rating || null,
        created_by,
      };

      // return res.status(200).json(data);
      const event = await Event.create(data);
      return res.status(201).json(event);
    } catch (e) {
      internalServerError(res, e);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await Event.findAll();
      return res.status(200).json(data);
    } catch (e) {
      internalServerError(res, e);
    }
  },
};

module.exports = controller;
