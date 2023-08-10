require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  },
}



