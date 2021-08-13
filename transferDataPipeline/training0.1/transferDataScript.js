//
// This quickstart shows how to add utterances to a LUIS model using the REST APIs.
//

var request = require('request');

//////////np
// Values to modify.

// YOUR-APP-ID: The App ID GUID found on the www.luis.ai Application Settings page.
const LUIS_appId = "YOUR_APP_ID";

// YOUR-AUTHORING-KEY: Your LUIS authoring key, 32 character value.
const LUIS_authoringKey = "YOUR_AUTHORING_KEY";

// YOUR-AUTHORING-ENDPOINT: Replace this with your authoring key endpoint.
// For example, "https://your-resource-name.cognitiveservices.azure.com/"
const LUIS_endpoint = "YOUR_AUTHORING_ENDPOINT";

// NOTE: Replace this your version number. The Pizza app uses a version number of "0.1".
const LUIS_versionId = "YOUR_VERSION_NUMBER";
//////////

const addUtterancesURI = `${LUIS_endpoint}luis/authoring/v3.0-preview/apps/${LUIS_appId}/versions/${LUIS_versionId}/examples`;
const addTrainURI = `${LUIS_endpoint}luis/authoring/v3.0-preview/apps/${LUIS_appId}/versions/${LUIS_versionId}/train`;


const fs = require('fs');


// var myArgs = process.argv.slice(2);


// var fileContents = fs.readFileSync(myArgs[0]).toString();



// console.log(fileContents);

// console.log("Break");

// const utterances=JSON.parse(fileContents);

// console.log(utt);
const utterances = [
    {
        "text": "I am unable to access Sales Force.  I am getting an error message",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 5,
                "endPos": 20
            },
            {
                "entity": "List.Apps.All",
                "startPos": 22,
                "endPos": 32
            }
        ]
    },
    {
        "text": "my manger has been trying to get my access restored.",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 29,
                "endPos": 41
            }
        ]
    },
    {
        "text": "Need help with a new employee's first time login",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 32,
                "endPos": 47
            }
        ]
    },
    {
        "text": "I need access",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 2,
                "endPos": 12
            }
        ]
    },
    {
        "text": "Avaya not taking my password",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 6,
                "endPos": 27,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 6,
                        "endPos": 27
                    }
                ]
            },
            {
                "entity": "ML.Apps.CommunicationsApplications",
                "startPos": 0,
                "endPos": 4,
                "children": [
                    {
                        "entity": "Avaya1x",
                        "startPos": 0,
                        "endPos": 4
                    }
                ]
            }
        ]
    },
    {
        "text": "LM Login Issue for my team member",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 3,
                "endPos": 13
            }
        ]
    },
    {
        "text": "Good morning, I am locked out of logging into enterprise",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 19,
                "endPos": 55
            }
        ]
    },
    {
        "text": "People with Liberty giving error message when trying to access",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 46,
                "endPos": 61
            }
        ]
    },
    {
        "text": "Share point access",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 17
            },
            {
                "entity": "List.Apps.All",
                "startPos": 0,
                "endPos": 10
            }
        ]
    },
    {
        "text": "Enterprise ID Password Reset",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 14,
                "endPos": 27,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 14,
                        "endPos": 27
                    }
                ]
            }
        ]
    },
    {
        "text": "i'm trying to login in ocas but the password is showing is invalid.",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 4,
                "endPos": 18
            },
            {
                "entity": "List.Apps.All",
                "startPos": 23,
                "endPos": 26
            },
            {
                "entity": "ML.Issues.Access",
                "startPos": 36,
                "endPos": 65,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 36,
                        "endPos": 65
                    }
                ]
            }
        ]
    },
    {
        "text": "Cant Access Voicemail\u00c2\u00a0",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 10
            },
            {
                "entity": "List.Apps.All",
                "startPos": 12,
                "endPos": 20
            }
        ]
    },
    {
        "text": "Unable to open docs in Watson",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 18
            },
            {
                "entity": "List.Apps.All",
                "startPos": 23,
                "endPos": 28
            }
        ]
    },
    {
        "text": "reset password",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 13,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 0,
                        "endPos": 13
                    }
                ]
            }
        ]
    },
    {
        "text": "password reset",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 13,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 0,
                        "endPos": 13
                    }
                ]
            }
        ]
    },
    {
        "text": "Becoming a delegate for no longer existing employee",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 18
            }
        ]
    },
    {
        "text": "RACF password",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 12,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 0,
                        "endPos": 12
                    }
                ]
            }
        ]
    },
    {
        "text": "I am locked out of TRACS.  Too many incorrect login attempts.",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 5,
                "endPos": 17
            },
            {
                "entity": "List.Apps.All",
                "startPos": 19,
                "endPos": 23
            },
            {
                "entity": "ML.Issues.Access",
                "startPos": 36,
                "endPos": 50,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 36,
                        "endPos": 50
                    }
                ]
            }
        ]
    },
    {
        "text": "Lost access to sales force affinity program(ARMS)",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 10
            },
            {
                "entity": "List.Apps.All",
                "startPos": 15,
                "endPos": 25
            }
        ]
    },
    {
        "text": "I am unable to open Sales force",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 5,
                "endPos": 18
            },
            {
                "entity": "List.Apps.All",
                "startPos": 20,
                "endPos": 30
            }
        ]
    },
    {
        "text": "I do not have my A-account # or log-in info available. how do I retrieve?",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 37
            }
        ]
    },
    {
        "text": "Good morning, access to bocomp has been revoked for entering password wrong",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 14,
                "endPos": 74,
                "children": [
                    {
                        "entity": "PasswordIssue",
                        "startPos": 14,
                        "endPos": 74
                    }
                ]
            },
            {
                "entity": "List.Apps.All",
                "startPos": 24,
                "endPos": 29
            }
        ]
    },
    {
        "text": "Arms- unable to login and send forms",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 6,
                "endPos": 20
            }
        ]
    },
    {
        "text": "I along with my peers are having trouble accessing ACES from VIA",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 26,
                "endPos": 49
            },
            {
                "entity": "List.Apps.All",
                "startPos": 61,
                "endPos": 63
            }
        ]
    },
    {
        "text": "Locked out of EID login",
        "intent": "Intent.AccessIssues",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 0,
                "endPos": 22
            }
        ]
    },
    {
        "text": "i need to change my pulse secure phone number.",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 20,
                "endPos": 31,
                "children": [
                    {
                        "entity": "PulseSecure",
                        "startPos": 20,
                        "endPos": 31
                    }
                ]
            }
        ]
    },
    {
        "text": "Issues with connecting to internet and staying charged.",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Issues.NetworkConnection",
                "startPos": 0,
                "endPos": 33
            }
        ]
    },
    {
        "text": "token for VPN isn't working",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 10,
                "endPos": 12
            }
        ]
    },
    {
        "text": "pulse secure is locked",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 0,
                "endPos": 11,
                "children": [
                    {
                        "entity": "PulseSecure",
                        "startPos": 0,
                        "endPos": 11
                    }
                ]
            },
            {
                "entity": "ML.Issues.NetworkConnection",
                "startPos": 0,
                "endPos": 21
            }
        ]
    },
    {
        "text": "Zscaler Driver got corrupted",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 0,
                "endPos": 6,
                "children": [
                    {
                        "entity": "zScaler",
                        "startPos": 0,
                        "endPos": 6
                    }
                ]
            }
        ]
    },
    {
        "text": "zscaler not logging out",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 0,
                "endPos": 6,
                "children": [
                    {
                        "entity": "zScaler",
                        "startPos": 0,
                        "endPos": 6
                    }
                ]
            }
        ]
    },
    {
        "text": "RSA change to new computer",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "RSA",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            }
        ]
    },
    {
        "text": "Pulse Secure log in",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 0,
                "endPos": 11,
                "children": [
                    {
                        "entity": "PulseSecure",
                        "startPos": 0,
                        "endPos": 11
                    }
                ]
            },
            {
                "entity": "ML.Issues.NetworkConnection",
                "startPos": 0,
                "endPos": 18
            }
        ]
    },
    {
        "text": "i seem to be having connection issues",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Issues.NetworkConnection",
                "startPos": 20,
                "endPos": 36
            }
        ]
    },
    {
        "text": "I'm trying to getting my laptop working I can't download RSA token",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 57,
                "endPos": 59,
                "children": [
                    {
                        "entity": "RSA",
                        "startPos": 57,
                        "endPos": 59
                    }
                ]
            }
        ]
    },
    {
        "text": "Unable to sign in to pulse",
        "intent": "Intent.NetworkIssues",
        "entities": [
            {
                "entity": "ML.Apps.NetworkSecurity",
                "startPos": 21,
                "endPos": 25,
                "children": [
                    {
                        "entity": "PulseSecure",
                        "startPos": 21,
                        "endPos": 25
                    }
                ]
            },
            {
                "entity": "ML.Issues.NetworkConnection",
                "startPos": 0,
                "endPos": 25
            }
        ]
    },
    {
        "text": "New Iphone will not let me enter old phone passcode",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 4,
                "endPos": 9,
                "children": [
                    {
                        "entity": "Device",
                        "startPos": 4,
                        "endPos": 9
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 4,
                "endPos": 9,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 4,
                        "endPos": 9
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 5,
                "endPos": 9
            },
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 11,
                "endPos": 50,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 11,
                        "endPos": 50
                    }
                ]
            }
        ]
    },
    {
        "text": "replacement iphone transfer",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 12,
                "endPos": 17,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 12,
                        "endPos": 17
                    }
                ]
            }
        ]
    },
    {
        "text": "reset my iphone, need to reinstall all work apps",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 14,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 9,
                        "endPos": 14
                    }
                ]
            }
        ]
    },
    {
        "text": "Got stuck with BYOMD process",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 15,
                "endPos": 19
            }
        ]
    },
    {
        "text": "Need to reset Passcode on mobile phone as I cannot remember it",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 8,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 8,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 26,
                "endPos": 37,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 26,
                        "endPos": 37
                    }
                ]
            }
        ]
    },
    {
        "text": "BYOMD upgrade Teams not working",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 0,
                "endPos": 4
            }
        ]
    },
    {
        "text": "iphone transfer of phone number",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 0,
                "endPos": 5,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 0,
                        "endPos": 5
                    }
                ]
            },
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 7,
                "endPos": 30,
                "children": [
                    {
                        "entity": "Register",
                        "startPos": 7,
                        "endPos": 30
                    }
                ]
            }
        ]
    },
    {
        "text": "I am having issue with my Liberty mobile phone",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.CompanyIssuedPhone",
                "startPos": 26,
                "endPos": 45
            }
        ]
    },
    {
        "text": "my phone reset and i need a new pin for mobileiron",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 3,
                "endPos": 7
            },
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 19,
                "endPos": 34,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 19,
                        "endPos": 34
                    }
                ]
            }
        ]
    },
    {
        "text": "Unlock a mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 9,
                        "endPos": 21
                    }
                ]
            }
        ]
    },
    {
        "text": "i cannot remember my iphone passcode that was recently changed",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 21,
                "endPos": 26,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 21,
                        "endPos": 26
                    }
                ]
            },
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 2,
                "endPos": 35,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 2,
                        "endPos": 35
                    }
                ]
            }
        ]
    },
    {
        "text": "Unlock a mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 9,
                        "endPos": 21
                    }
                ]
            }
        ]
    },
    {
        "text": "Unlock a mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 9,
                        "endPos": 21
                    }
                ]
            }
        ]
    },
    {
        "text": "Unlock a mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 9,
                        "endPos": 21
                    }
                ]
            }
        ]
    },
    {
        "text": "Unlock a mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 9,
                        "endPos": 21
                    }
                ]
            }
        ]
    },
    {
        "text": "microsoft teams will not login on my work mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.Access",
                "startPos": 25,
                "endPos": 29,
                "children": [
                    {
                        "entity": "LoginIssue",
                        "startPos": 25,
                        "endPos": 29
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 42,
                "endPos": 54
            },
            {
                "entity": "ML.Issues.Mobile",
                "startPos": 42,
                "endPos": 54
            }
        ]
    },
    {
        "text": "my iphone is locked due to passcode",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 3,
                "endPos": 8,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 3,
                        "endPos": 8
                    }
                ]
            },
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 3,
                "endPos": 18,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 3,
                        "endPos": 18
                    }
                ]
            }
        ]
    },
    {
        "text": "phone help",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 0,
                "endPos": 4
            }
        ]
    },
    {
        "text": "I'm setting up a new company iPhone and need a Mobileiron PIN.",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 4,
                "endPos": 34,
                "children": [
                    {
                        "entity": "Register",
                        "startPos": 4,
                        "endPos": 34
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 29,
                "endPos": 34,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 29,
                        "endPos": 34
                    }
                ]
            }
        ]
    },
    {
        "text": "Need new code for mobileiron",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 9,
                "endPos": 27,
                "children": [
                    {
                        "entity": "Register",
                        "startPos": 9,
                        "endPos": 27
                    }
                ]
            }
        ]
    },
    {
        "text": "mobile device password change",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 0,
                "endPos": 12,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 0,
                        "endPos": 12
                    }
                ]
            },
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 14,
                "endPos": 28,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 14,
                        "endPos": 28
                    }
                ]
            }
        ]
    },
    {
        "text": "Unlock a mobile device",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Issues.HardwareActions",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Unlock",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 9,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 9,
                        "endPos": 21
                    }
                ]
            }
        ]
    },
    {
        "text": "need help with bring your own mobile device on my new iphone",
        "intent": "Intent.MobileManagement",
        "entities": [
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 15,
                "endPos": 42
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 30,
                "endPos": 42,
                "children": [
                    {
                        "entity": "Generic",
                        "startPos": 30,
                        "endPos": 42
                    }
                ]
            },
            {
                "entity": "ML.Hardware.Mobile",
                "startPos": 54,
                "endPos": 59,
                "children": [
                    {
                        "entity": "iPhone",
                        "startPos": 54,
                        "endPos": 59
                    }
                ]
            }
        ]
    },
    {
        "text": "iUnderwrite - Crime Rating Premiums tab is unable to be accessed.",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 10,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 10
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 14,
                "endPos": 63,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 14,
                        "endPos": 63
                    }
                ]
            }
        ]
    },
    {
        "text": "Agreement_RateStatus is required. (Rate Status is not valid)",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 35,
                "endPos": 58,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 35,
                        "endPos": 58
                    }
                ]
            }
        ]
    },
    {
        "text": "Getting error in Change policy screen while rating the premium",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 8,
                "endPos": 50,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 8,
                        "endPos": 50
                    }
                ]
            }
        ]
    },
    {
        "text": "IUW Rating  Exports not showing all Coverages as the the rating systems.",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 4,
                "endPos": 30,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 4,
                        "endPos": 30
                    }
                ]
            }
        ]
    },
    {
        "text": "i am rerating a policy and getting a huge error message i cannot bypass.",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 5,
                "endPos": 54,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 5,
                        "endPos": 54
                    }
                ]
            }
        ]
    },
    {
        "text": "Compass rating error again A7284122.2\u00c2\u00a0",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 6,
                "children": [
                    {
                        "entity": "Compass",
                        "startPos": 0,
                        "endPos": 6
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 8,
                "endPos": 19,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 8,
                        "endPos": 19
                    }
                ]
            }
        ]
    },
    {
        "text": "iunderwrite rating summary issues",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 10,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 10
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 12,
                "endPos": 32,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 12,
                        "endPos": 32
                    }
                ]
            }
        ]
    },
    {
        "text": "I am having an issue with the Compass Rating views in iUnderwrite",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 30,
                "endPos": 36,
                "children": [
                    {
                        "entity": "Compass",
                        "startPos": 30,
                        "endPos": 36
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 38,
                "endPos": 49,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 38,
                        "endPos": 49
                    }
                ]
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 54,
                "endPos": 64,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 54,
                        "endPos": 64
                    }
                ]
            }
        ]
    },
    {
        "text": "Unable to send ratings to market in compass. 404 error",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 21,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 0,
                        "endPos": 21
                    }
                ]
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 36,
                "endPos": 42,
                "children": [
                    {
                        "entity": "Compass",
                        "startPos": 36,
                        "endPos": 42
                    }
                ]
            }
        ]
    },
    {
        "text": "Compass Rating Errors",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 6,
                "children": [
                    {
                        "entity": "Compass",
                        "startPos": 0,
                        "endPos": 6
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 8,
                "endPos": 20,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 8,
                        "endPos": 20
                    }
                ]
            }
        ]
    },
    {
        "text": "issues with rating on policy productions advised me to contact help desk",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 27,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 0,
                        "endPos": 27
                    }
                ]
            }
        ]
    },
    {
        "text": "My Forms Comparison is stuck in Rating in Progress.",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 23,
                "endPos": 49,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 23,
                        "endPos": 49
                    }
                ]
            }
        ]
    },
    {
        "text": "issues with crime rating",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 23,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 0,
                        "endPos": 23
                    }
                ]
            }
        ]
    },
    {
        "text": "I need level two help desk for a rating error\u00c2\u00a0",
        "intent": "Intent.RatingIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 33,
                "endPos": 44,
                "children": [
                    {
                        "entity": "Rating issue",
                        "startPos": 33,
                        "endPos": 44
                    }
                ]
            }
        ]
    },
    {
        "text": "iUW will not save Inputs",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 23
            }
        ]
    },
    {
        "text": "Security Collateral Information Task reopened in Midway\u00c2\u00a0",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 49,
                "endPos": 54,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 49,
                        "endPos": 54
                    }
                ]
            }
        ]
    },
    {
        "text": "Midway D&B error has occured in application",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 5,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 0,
                        "endPos": 5
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 15
            }
        ]
    },
    {
        "text": "Unable to generate a proposal in IUW",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 28
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 33,
                "endPos": 35,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 33,
                        "endPos": 35
                    }
                ]
            }
        ]
    },
    {
        "text": "My billing is stuck in Midway",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 3,
                "endPos": 18,
                "children": [
                    {
                        "entity": "Billing issue",
                        "startPos": 3,
                        "endPos": 18
                    }
                ]
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 23,
                "endPos": 28,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 23,
                        "endPos": 28
                    }
                ]
            }
        ]
    },
    {
        "text": "Midway Renewal Task did not generate",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 5,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 0,
                        "endPos": 5
                    }
                ]
            }
        ]
    },
    {
        "text": "iunderwrite crime",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 10,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 10
                    }
                ]
            }
        ]
    },
    {
        "text": "iUW - cannot add documents - Shana Ehrhardt",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 25
            }
        ]
    },
    {
        "text": "iUW WC forms will not allow me to select nor fill in",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 26
            }
        ]
    },
    {
        "text": "Producer on FAM is incorrect in midway",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 19,
                "endPos": 37
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 32,
                "endPos": 37,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 32,
                        "endPos": 37
                    }
                ]
            }
        ]
    },
    {
        "text": "Agency code validation.  In midway it cleared but in PW it is still error",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 28,
                "endPos": 33,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 28,
                        "endPos": 33
                    }
                ]
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 53,
                "endPos": 54,
                "children": [
                    {
                        "entity": "LMPW",
                        "startPos": 53,
                        "endPos": 54
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 50,
                "endPos": 72
            }
        ]
    },
    {
        "text": "iUW proposal will not generate",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 29
            }
        ]
    },
    {
        "text": "iUW Proposal issues",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 2,
                "children": [
                    {
                        "entity": "iUnderwrite",
                        "startPos": 0,
                        "endPos": 2
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 18
            }
        ]
    },
    {
        "text": "Wrong producer selected for midway application",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 22
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 28,
                "endPos": 33,
                "children": [
                    {
                        "entity": "Midway",
                        "startPos": 28,
                        "endPos": 33
                    }
                ]
            }
        ]
    },
    {
        "text": "The BGI in compass is not updating",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 11,
                "endPos": 17,
                "children": [
                    {
                        "entity": "Compass",
                        "startPos": 11,
                        "endPos": 17
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 11,
                "endPos": 33
            }
        ]
    },
    {
        "text": "We are unable to link Act # 9-473022 to Prospect # 713-922 in Compass",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 7,
                "endPos": 68
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 62,
                "endPos": 68
            }
        ]
    },
    {
        "text": "Clipper is not sending quotes to market.",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 28
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 6,
                "children": [
                    {
                        "entity": "Clipper",
                        "startPos": 0,
                        "endPos": 6
                    }
                ]
            }
        ]
    },
    {
        "text": "Clipper- Stuck in Send to Market status.",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 0,
                "endPos": 6,
                "children": [
                    {
                        "entity": "Clipper",
                        "startPos": 0,
                        "endPos": 6
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 0,
                "endPos": 13
            }
        ]
    },
    {
        "text": "is clipper down?",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Apps.GRS",
                "startPos": 3,
                "endPos": 9,
                "children": [
                    {
                        "entity": "Clipper",
                        "startPos": 3,
                        "endPos": 9
                    }
                ]
            },
            {
                "entity": "ML.Issues.GRS",
                "startPos": 3,
                "endPos": 14
            }
        ]
    },
    {
        "text": "I cannot finalize the account RESCO Products, Inc. opportunity in NMWB",
        "intent": "Intent.GRSIssues",
        "entities": [
            {
                "entity": "ML.Issues.GRS",
                "startPos": 51,
                "endPos": 69,
                "children": [
                    {
                        "entity": "Opportunity",
                        "startPos": 51,
                        "endPos": 69
                    }
                ]
            },
            {
                "entity": "ML.Apps.GRS",
                "startPos": 66,
                "endPos": 69,
                "children": [
                    {
                        "entity": "NMWB",
                        "startPos": 66,
                        "endPos": 69
                    }
                ]
            }
        ]
    }
    
  
];


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

