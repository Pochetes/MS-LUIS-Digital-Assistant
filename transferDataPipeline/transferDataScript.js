//
// This quickstart shows how to add utterances to a LUIS model using the REST APIs.
//

var request = require('request');

//////////np
// Values to modify.

// YOUR-APP-ID: The App ID GUID found on the www.luis.ai Application Settings page.
const LUIS_appId = "71318629-8ea4-47c2-bc0f-dd2575a50605";

// YOUR-AUTHORING-KEY: Your LUIS authoring key, 32 character value.
const LUIS_authoringKey = "b69a51f58d3047048779bd3c01080ff0";

// YOUR-AUTHORING-ENDPOINT: Replace this with your authoring key endpoint.
// For example, "https://your-resource-name.cognitiveservices.azure.com/"
const LUIS_endpoint = "https://hydluissbx01-authoring.cognitiveservices.azure.com/";

// NOTE: Replace this your version number. The Pizza app uses a version number of "0.1".
const LUIS_versionId = "v0.5";
//////////

const addUtterancesURI = `${LUIS_endpoint}luis/authoring/v3.0-preview/apps/${LUIS_appId}/versions/${LUIS_versionId}/examples`;
const addTrainURI = `${LUIS_endpoint}luis/authoring/v3.0-preview/apps/${LUIS_appId}/versions/${LUIS_versionId}/train`;


const fs = require('fs');


var myArgs = process.argv.slice(2);


var fileContents = fs.readFileSync(myArgs[0]).toString();



console.log(fileContents);

console.log("Break");

const utterances=JSON.parse(fileContents);

console.log(utt);






/*


const utterances = [


    {
        'text': 'Outlook, not receiving fax confimations',
        'intentName': 'Intent.OutlookIssues',
        'entityLabels': [
            {
                'entityName': 'ML.Issues.Outlook',
                'startCharIndex': 0,
                'endCharIndex': 6
            }
        ]
    },
    
  
];

*/

// Main function.
const main = async() =>{

    await addUtterances(utterances);
    await train("POST");
    await train("GET");

}

// Adds the utterances to the model.
const addUtterances = async (utterances) => {

    const options = {
        uri: addUtterancesURI,
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': LUIS_authoringKey
        },
        json: true,
        body: utterances
    };

    const response = await request(options)
    console.log("addUtterance:\n" + JSON.stringify(response, null, 2));
}

// With verb === "POST", sends a training request.
// With verb === "GET", obtains the training status.
const train = async (verb) => {

    const options = {
        uri: addTrainURI,
        method: verb,
        headers: {
            'Ocp-Apim-Subscription-Key': LUIS_authoringKey
        },
        json: true,
        body: null // The body can be empty for a training request
    };

    const response = await request(options)
    console.log("train " + verb + ":\n" + JSON.stringify(response, null, 2));
}

// MAIN
main().then(() => console.log("done")).catch((err)=> console.log(err));

