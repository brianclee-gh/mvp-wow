/* eslint-disable import/extensions */
const axios = require('axios').default;
const { authToken } = require('../config.js');

const data = JSON.stringify({
  query: `query {
  characterData {
    character(
    name: "Entranced",
    serverSlug: "Stormscale",
    serverRegion: "us"
    ) {
      canonicalID,
      classID,
      gameData,
      name,
      level,
    }
  }
}`,
  variables: {},
});

const options = {
  method: 'GET',
  url: 'https://www.warcraftlogs.com/api/v2/client',
  headers: {
    'Content-Type': 'application/json',
    Authorization: authToken,
  },
  data,
};

module.exports = {
  getCharacter: (req, res) => {
    axios.request(options).then((response) => {
      res.send(response.data.data.characterData);
    }).catch((error) => {
      console.error(error);
    });
  },
};
