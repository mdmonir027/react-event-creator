const errors = {
  internalServerError: (res, e) => {
    console.log(e);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  },
};

module.exports = errors;
