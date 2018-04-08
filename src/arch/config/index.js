// Dummy config for now. TODO: implement resolving the configuration from file
const config = {
  port: 5000,
  'service/url': 'http://www.example.com'
};

export const getConfig = (name) => {
  return config[name];
};
