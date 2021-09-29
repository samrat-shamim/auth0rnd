/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CUSTOM_DOMAIN: process.env.AUTH0_CUSTOM_DOMAIN
  }
}

