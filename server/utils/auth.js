const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'secret';
const expiration = '1h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req, res }) {
    let token = req.query.token || req.headers.authorization || req.body.token;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};