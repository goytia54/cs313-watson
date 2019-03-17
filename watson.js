const watson = require('watson-developer-cloud');

const assistant = new watson.AssistantV1({
    iam_apikey: 'itzO2xMyeofLZeeuVhsQFPppt-62V0vG27yrhSWIrGDs',
    version: '2019-04-16',
    url: 'https://gateway.watsonplatform.net/assistant/api'
});

const messageAssitant = (req,res)=>
{
    assistant.message({
        workspace_id: '8d5f783e-bc6e-47fd-91c8-2052292ed383',
        input: {'text': req.body.interactionText}
    },  function(err, response) {
        if (err)
            console.log('error:', err);
        else
            res.status(200).json(response.output.text.toString())
    });
};


module.exports = {
    messageAssitant
}