// VARIABLES
var columnCount = 4;
var results;
var resultsDictionary = [];
var college = "AmherstCollege";
var userClubs = [];
var userClubEmails = [];
var userClubPhoneNumbers = [];
var userClubBio = [];

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
                "Trades and Personal Services"
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
                "Asian/Pacific Islander"
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

var tagconverter = {
    "Art":["artsy","creative","performingArts","humanities"],
    "Humanities": ["creative","artsy","education","academic"],
    "Business": ["business","leader","academic"],
    "Heath and Medicine": ["health","academic","nurturer"],
    "Multi-/Interdiciplinary Studies":["extrovert"] ,
    "Public and Social Services": ["community"],
    "Social Sciences": ["academic","education"],
    "Trades and Personal Services": [],
    "White": [],
    "Hispanic or Latino": ["latino"],
    "Black or African American": ["community","publicSocial","black","discussion"],
    "Native American": [],
    "Asian/Pacific Islander": [],
    "Christian": ["christian","religion","community"],
    "Mormon": [],
    "Jehovah's Witness": [],
    "Jewish": ["jewish","education","religion","community"],
    "Muslim": [],
    "Buddhist": [],
    "Male": ["sport","outdoors","videoGames"],
    "Female": ["artsy","creative"],
    "Other": [],
    "Academic": ["Academic"],
    "Affinity": ["religious","affinity"],
    "Arts and Performance": ["artsy","dance"],
    "Club Sports": ["sport","outdoor"],
    "Common Interest": [],
    "Media and Communications": ["educcation"],
    "Pre-Professional": ["academic","business"],
    "Religious": ["relgious","affinity"],
    "Social and Political Action": ["activism","community"],
    "Democratic Party": ["democrat","leader","activism","discussion"],
    "Republican Party": ["leader","activism","discussion"],
    "Libertarian Party": ["leader","activism","discussion"],
    "Green Party": ["activism"],
    "Constitutional Party": ["activism"],
    "Debate": ["discussion","activism","education","leader"],
    "Service": ["leader"],
    "Education": ["education","academic"],
    "Discussion": ["discussion"],
    "Vocal Performnance": ["sing"],
    "Dance": ["dance","artsy","sport"],
    "Write": ["humanities"],
    "Musical Instrument": ["performingArts","creative","humanities"],
    "Photography": [""],
    "Religious Activites": ["religious","community"],
    "Solve Problems": ["academic"],
    "Draw": ["creative"],
    "Sports": ["sport","outdoors","clubSports","extrovert"],
    "Activism": ["leader","activism","nurturer"],
    "Hiking": ["outdoors","sport","extrovert"],
    "Unusual": ["unusual"],
    "Meditation": ["sport"],
    "Group Fitness": ["dance","sport"],
    "Organized": ["academic","debate","education"],
    "Nuturing": ["nurturing"],
    "Flexible": ["unusual","freeSpirit","games"],
    "Creative": ["artsy","creative"],
    "Resourceful": ["organized","leader","academic"]
}


function setupSurvey() {
    results = [];
    //GET RESULTS
    var survey = new Survey.Model(json);

    survey
        .onComplete
        .add(function (result) {
            getResults(result.data)

            document
                .querySelector('#surveyResult')
            results = result.data;
            getResults();
        });


    $("#surveyElement").Survey({model: survey});
    console.log(results);
}

//FUNCTIONS

// Function: Determine what clubs the user should join
// Input
// userresults: dictionary type
// Output
// Array of Clubs


function fixResults(){
    var resultsModified = [];
    //Get Extrovert Level
    for(var key in results){
        if(key=="IvsE"){
            var ivseArray = results[key];
            var extrovertValue = 0;
            for(var ivseKey in ivseArray){
                extrovertValue+=parseInt(ivseArray[ivseKey]);
            }
            break;
        }
    }
    delete results[key]
    if(extrovertValue<=15) resultsModified.push("extrovert");
    if(extrovertValue>=15) resultsModified.push("introvert");

    //CONVERT WORDS TO TAGS
    for(var key in results){
        //If a string
        if(typeof results[key]=="string") {
            var category = results[key];

            resultsModified=resultsModified.concat(tagconverter[category]);

        }
        //If an array
        else if(typeof results[key]=="object"){
            for(var category in results[key]){
                resultsModified=resultsModified.concat(tagconverter[category]);
            }
        }
    }

    //Set results
    results = resultsModified;
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

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
}

// Function: Get the table of clubs avaliable
//Input
// schoolname: String
// Output
// Table of clubs
function getResults(){
    var finalClubs;
    fixResults();
    var database = firebase.database();
    var ref = firebase.database().ref("schools/"+college+"/");
    ref.on("child_added", function(data) {
        attref = firebase.database().ref("schools/"+college+"/"+data.key+"/tags/");
        attref.on("child_added",function(data1){
            //See if it matches with any other keys
            //data1.val()
            //If a club tag and a user tag are the same and if that club is not the array, add the club
            if(results.includes(data1.val())) {
                //console.log(data.val().name);
                userClubs.push(data.val().name);
                userClubEmails.push(data.val().email);
                userClubPhoneNumbers.push(data.val().phoneNumb);
                userClubBio.push(data.val().bio);
            }
        });
        finalClubs = setClubs(userClubs,userClubEmails,userClubPhoneNumbers,userClubBio);
        console.log(finalClubs);
    });
}

function makeUnique(repeatArray){
    let unique_array = []
    for(let i = 0;i < repeatArray.length; i++){
        if(unique_array.indexOf(repeatArray[i]) == -1){
            unique_array.push(repeatArray[i])
        }
    }
    return unique_array;
}

function setClubs(clubs,emails,phonenumber,bio){
    clubs = makeUnique(clubs);
    emails = makeUnique(emails);
    phonenumber = makeUnique(phonenumber);
    bio = makeUnique(bio);

    var htmlstring = "";
    for(var club in clubs) {
        htmlstring += clubs[club] + " | " + emails[club] + " | " + phonenumber[club] + " | " + bio[club] + "<br />";
        if(club==9)
            break;
    }
    document.getElementById("realResults").innerHTML = htmlstring;

    return unique_array;
}
//
setupSurvey();



//connectToData();



