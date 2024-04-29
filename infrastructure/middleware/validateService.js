

 const validate = (schema) => async (req, res, next) => {
    try {
      const {body} = req;
      console.log({body});
      await schema.validate(body);
      return next();
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };
  module.exports = validate;