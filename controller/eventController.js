const { internalServerError } = require('../utils/errorResponses');
const Event = require('../models/Event');

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
        time,
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
        date_from,
        date_to: date_to || null,
        time,
        source_url,
        rating: rating || null,
        created_by,
      };
      //   return res.status(200).json(data);
      const event = await Event.create(data);
      return res.status(201).json(event);
    } catch (e) {
      internalServerError(res, e);
    }
  },
};

module.exports = controller;
