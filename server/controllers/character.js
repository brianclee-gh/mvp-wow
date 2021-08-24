/* eslint-disable import/extensions */
const axios = require('axios').default;
const { authToken } = require('../config.js');

const options = {
  method: 'GET',
  url: 'https://www.warcraftlogs.com/api/v2/client',
  headers: {
    'Content-Type': 'application/json',
    Authorization: authToken,
  },
  data: '{"query":"query {\n  characterData {\n    character(\n    name: \"Entranced\",\n    serverSlug: \"Stormscale\",\n    serverRegion: \"us\"\n    ) {\n      canonicalID,\n classID,\n      name,\n      level,\n    }\n  } \n}"}',
};

module.exports = {
  getCharacter: (req, res) => {
    axios.request(options).then((response) => {
      console.log(response.data);
      res.send(response.data);
    }).catch((error) => {
      console.error(error);
    });
  },
};
