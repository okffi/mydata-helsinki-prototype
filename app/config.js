// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {

  // Service name used in header. Eg: 'Renew your passport'
  serviceName: "eAsiointi 2.0",

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Force HTTP to redirect to HTTPs on production
  useHttps: 'true',

  // Cookie warning - update link to service's cookie page.
  cookieText: 'MixLibris uses cookies to make the site simpler. <a href="#" title="Find out more about cookies">Find out more about cookies</a>',

  // Logo link title for alt text
  logo_link_title: 'Go to the MixLibris homepage',

  // Header text (on the main logo image position)
  global_header_text: 'MixLibris'


};
