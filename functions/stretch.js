// it reminds you to streacordate de hacer elongaciones, aprovechá a
const lang = require('../sources/config');
const source = require(lang.es);

const { stretchQuotes } = source;

const stretch = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (stretchQuotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      blocks: [
		{
			type: "header",
			text: {
				type: "plain_text",
				text: stretchQuotes[randonIndex].name,
				emoji: true
			}
		},
		{
			type: "divider"
		},
		{
			type: "section",
			text: {
				type: "mrkdwn",
				text: stretchQuotes[randonIndex].description
			}
        },
        {
			type: "section",
			text: {
				type: "mrkdwn",
				text: stretchQuotes[randonIndex].extra
			}
		},
		{
			type: "divider"
		},
		{
			type: "image",
			image_url: stretchQuotes[randonIndex].img,
			alt_text: "image"
		}
	]
	});
  };

module.exports = stretch;