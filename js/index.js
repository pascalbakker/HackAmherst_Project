//VARIABLES
var columnCount = 4;
var results;

//QUESTIONS
var json = {
    questions: [
        {
            //QUESTION 1: MAJOR
            type: "radiogroup",
            name: "major",
            title: "What is your major?",
            isRequired: true,
            colCount: columnCount,
            choices: [
                "Do not state",
                "Art",
                "Humanities",
                "Business",
                "Heath and Medicine",
                "Multi-/Interdiciplinary Studies",
                "Public and Social Services",
                "Social Sciences",
                "Trades anda Personal Services"
            ]
        }, {
            //QUESTION 2: ETHNICITY
            type: "radiogroup",
            name: "ethnicity",
            title: "What is your ethnicity(or race)?",
            isRequired: true,
            colCount: columnCount,
            choices: [
                "Do not state",
                "White",
                "Hispanic or Latino",
                "Black or African American",
                "Native American",
                "Asian/ Pacific Islander"
            ]
        }, {
            //QUESTION 3: RELIGIOUS AFFLIATION
            type: "radiogroup",
            name: "religion",
            title: "What is your religious identity?",
            isRequired: true,
            colCount: columnCount,
            choices: [
                "Do not state",
                "Christian",
                "Catholic",
                "Mormon",
                "Jehovah's Witness",
                "Jewish",
                "Muslim",
                "Buddhist"
            ]
        }, {
            //QUESTION 4: GENDER
            type: "radiogroup",
            name: "gender",
            title: "What is your Gender?",
            isRequired: true,
            colCount: columnCount,
            choices: [
                "Do not state",
                "Male",
                "Female",
                "Other"
            ]
        }, {
            //QUESTION 5: INTERESTS
            type: "checkbox",
            name: "interests",
            title: "What are you interested in?",
            isRequired: true,
            colCount: 4,
            choices: [
                "No Suggestion",
                "Academic",
                "Affinity",
                "Arts and Performance",
                "Club Sports",
                "Common Interest",
                "Media and Communications",
                "Pre-Professional",
                "Religious",
                "Social and Political Action"
            ]
        }, {
            //QUESTION 6: INTERESTS
            type: "radiogroup",
            name: "political",
            title: "What is your political affiliation?",
            isRequired: true,
            colCount: 4,
            choices: [
                "Choose not to respond",
                "Democratic Party",
                "Republican Party",
                "Libertarian Party",
                "Green Party",
                "Constitutional Party"
            ]
        }, {
            //QUESTION 7: Activites
            type: "checkbox",
            name: "activities",
            title: "What activities are you interrested in?",
            isRequired: true,
            colCount: 4,
            choices: [
                "No Suggestion",
                "Debate",
                "Service",
                "Education",
                "Discussion",
                "Vocal Performance",
                "Dance",
                "Write",
                "Musical Instrument",
                "Act",
                "Play Games",
                "Read",
                "Photography",
                "Religious Actvities",
                "Solve Problems",
                "Draw",
                "Sporsts",
                "Activism",
                "Hiking",
                "Unusual",
                "Meditation",
                "Group fitness"
            ]
        }, {
            //QUESTION 8-14: INTROVERT VS EXTROVERT
            type: "matrix",
            name: "IvsE",
            title: "Please indicate if you agree or disagree with the following statements",
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {
                    value: "IvsE_1",
                    text: "I recharge by being social."
                }, {
                    value: "IvsE_2",
                    text: "I prefer group conversations over one-on-one conversations."
                }, {
                    value: "IvsE_3",
                    text: "I prefer to have many friends rather than a view close ones."
                }, {
                    value: "IvsE_4",
                    text: "I prefer to speak more than listen."
                }, {
                    value: "IvsE_5",
                    text: "I enjoy attention."
                }, {
                    value: "IvsE_6",
                    text: "I prefer work in open spaces than quiet ones."
                }
             ]
            },{
                //QUESTION 6: INTERESTS
                type: "radiogroup",
                name: "personaldescription",
                title: "How would friends describe you as?",
                isRequired: true,
                colCount: 4,
                choices: [
                    "Choose not to respond",
                    "Organized",
                    "Nurturing",
                    "Flexible",
                    "Creative",
                    "Resourceful"
                ]
            }
    ]
};


//GET RESULTS
window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
        results = results.data;
    });

$("#surveyElement").Survey({model: survey});


//FUNCTIONS

// Function: Determine what clubs the user should join
// Input
// userresults: dictionary type
// Output
// Array of Clubs
function calculateClubs(userResults){


}

function connectToData(){
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
        apiKey: "AIzaSyB7bQIsKHAhf-ob8ZmC3suYOGhHYQuxUUg ",
        authDomain: "clubshare-884b4.firebaseapp.com",
        databaseURL: "https://clubshare-884b4.firebaseio.com/",
        //storageBucket: "<BUCKET>.appspot.com",
        //messagingSenderId: "<SENDER_ID>",
    };
    firebase.initializeApp(config);
}

// Function: Get the table of clubs avaliable
//Input
// schoolname: String
// Output
// Table of clubs
function getDatabaseTables(){
    var ref = firebase.database().ref();
    ref.on
}

