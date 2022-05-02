const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const devInfo = require('./models/devInfo')
const { json } = require('express/lib/response');
const app = express();
const db = require('mongoose')
const port = process.env.PORT || 3001;
const fetch = require("node-fetch");


const database = process.env.database;
const username = process.env.username;
const password = process.env.password;
const url = `mongodb+srv://${username}:${password}@cluster0.8yytl.mongodb.net/${database}?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}



app.use(express.json());   // Important for sending data in json format

// var developers = [
//     {
//         "id": "gcnit",
//         "avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
//         "name": "Gaurav Chandak",
//         "company": "workat.tech",
//         "blog": "https://workat.tech",
//         "location": "Bangalore, India",
//         "email": null,
//         "bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
//         "github_id": "gcnit",
//         "linkedin_id": "gcnit",
//         "codechef_id": "gc_nit",
//         "hackerrank_id": "gcnit",
//         "twitter_id": "gc_nit",
//         "medium_id": "gc_nit",
//         "repos": [{
//             "name": "awesome-learn-to-code",
//             "html_url": "https://github.com/gcnit/awesome-learn-to-code",
//             "description": "A list of awesome resources for learning to code",
//             "updated_at": "2020-08-12T18:21:53Z"
//     }]
//     },

//     {
//         "id": "naveen675",
//         "avatar_url": "https://avatars.githubusercontent.com/u/38736123?v=4",
//         "name": "Naveen Sai",
//         "company": null,
//         "blog": "https://www.hackerrank.com/spnaveen675",
//         "location": null,
//         "email": null,
//         "bio": "https://www.linkedin.com/in/naveensai-675/",
//         "github_id": "naveen675",
//         "linkedin_id": "gcnit",
//         "codechef_id": "gc_nit",
//         "hackerrank_id": "gcnit",
//         "twitter_id": "gc_nit",
//         "medium_id": "gc_nit",
//         "repos": [
//             {
//                 "name": "Backend",
//                 "html_url": "https://github.com/naveen675/Backend",
//                 "description": null,
//                 "updated_at": "2022-04-16T11:20:22Z"
//             },
//             {
//                 "name": "DeveloperProfile",
//                 "html_url": "https://github.com/naveen675/DeveloperProfile",
//                 "description": null,
//                 "updated_at": "2022-04-11T11:53:41Z"
//             },
//             {
//                 "name": "devprofile",
//                 "html_url": "https://github.com/naveen675/devprofile",
//                 "description": null,
//                 "updated_at": "2022-04-24T09:48:17Z"
//             },
//             {
//                 "name": "ds-algo",
//                 "html_url": "https://github.com/naveen675/ds-algo",
//                 "description": "This repo contains all the ds and algo problems that I have solved so far. which includes starting arrays,strings,linked list, pointers,hashing,heap,stack and queue,Back tracking,BT, Greedy , BST,graphs,",
//                 "updated_at": "2022-02-22T17:21:55Z"
//             },
//             {
//                 "name": "GCP",
//                 "html_url": "https://github.com/naveen675/GCP",
//                 "description": "Google Cloud Certifications",
//                 "updated_at": "2022-03-15T19:11:49Z"
//             },
//             {
//                 "name": "hello-world",
//                 "html_url": "https://github.com/naveen675/hello-world",
//                 "description": null,
//                 "updated_at": "2022-04-06T19:12:27Z"
//             },
//             {
//                 "name": "Javascript",
//                 "html_url": "https://github.com/naveen675/Javascript",
//                 "description": null,
//                 "updated_at": "2022-02-20T10:11:53Z"
//             },
//             {
//                 "name": "JsAssignment",
//                 "html_url": "https://github.com/naveen675/JsAssignment",
//                 "description": null,
//                 "updated_at": "2022-03-29T07:01:06Z"
//             },
//             {
//                 "name": "MernApp",
//                 "html_url": "https://github.com/naveen675/MernApp",
//                 "description": null,
//                 "updated_at": "2022-04-25T11:44:25Z"
//             },
//             {
//                 "name": "naveen675",
//                 "html_url": "https://github.com/naveen675/naveen675",
//                 "description": null,
//                 "updated_at": "2022-03-18T14:49:55Z"
//             },
//             {
//                 "name": "naveen675.github.io",
//                 "html_url": "https://github.com/naveen675/naveen675.github.io",
//                 "description": null,
//                 "updated_at": "2022-03-25T06:14:12Z"
//             },
//             {
//                 "name": "Portfo1",
//                 "html_url": "https://github.com/naveen675/Portfo1",
//                 "description": "Created a sample web page using python flask framework. In this website Contact page will take user information and stores it in csv file",
//                 "updated_at": "2022-03-19T18:18:41Z"
//             },
//             {
//                 "name": "Portfolio",
//                 "html_url": "https://github.com/naveen675/Portfolio",
//                 "description": "Created with CodeSandbox",
//                 "updated_at": "2022-04-18T12:24:08Z"
//             },
//             {
//                 "name": "profile",
//                 "html_url": "https://github.com/naveen675/profile",
//                 "description": null,
//                 "updated_at": "2022-05-01T09:40:56Z"
//             },
//             {
//                 "name": "Python",
//                 "html_url": "https://github.com/naveen675/Python",
//                 "description": "Python codes",
//                 "updated_at": "2022-04-01T18:02:35Z"
//             },
//             {
//                 "name": "React",
//                 "html_url": "https://github.com/naveen675/React",
//                 "description": "Created with CodeSandbox",
//                 "updated_at": "2022-04-10T17:41:34Z"
//             },
//             {
//                 "name": "React-apps",
//                 "html_url": "https://github.com/naveen675/React-apps",
//                 "description": null,
//                 "updated_at": "2022-04-29T06:29:57Z"
//             },
//             {
//                 "name": "react-exercise",
//                 "html_url": "https://github.com/naveen675/react-exercise",
//                 "description": "Created with CodeSandbox",
//                 "updated_at": "2022-04-22T16:33:04Z"
//             },
//             {
//                 "name": "System-Design",
//                 "html_url": "https://github.com/naveen675/System-Design",
//                 "description": null,
//                 "updated_at": "2022-02-05T14:29:59Z"
//             },
//             {
//                 "name": "system-design-primer",
//                 "html_url": "https://github.com/naveen675/system-design-primer",
//                 "description": "Learn how to design large-scale systems. Prep for the system design interview.  Includes Anki flashcards.",
//                 "updated_at": "2021-12-25T16:12:36Z"
//             },
//             {
//                 "name": "UtilityApp",
//                 "html_url": "https://github.com/naveen675/UtilityApp",
//                 "description": "This Repository contains an App designed using javascript which will be doing following Operations URL Encode/Decode, base64 Encode/decode, String Hashing, Epoch,Humandate,Binary,Octal,Hex,Decimal, Rgb and Hex,Unit Conversions",
//                 "updated_at": "2022-03-25T06:13:33Z"
//             }
//         ]
//     }
// ];

var temp = {
        "id": "gcnit",
        "avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
        "name": "Gaurav Chandak",
        "company": "workat.tech",
        "blog": "https://workat.tech",
        "location": "Bangalore, India",
        "email": null,
        "bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
        "github_id": "gcnit",
        "linkedin_id": "gcnit",
        "codechef_id": "gc_nit",
        "hackerrank_id": "gcnit",
        "twitter_id": "gc_nit",
        "medium_id": "gc_nit",
        "repos": [{
            "name": "awesome-learn-to-code",
            "html_url": "https://github.com/gcnit/awesome-learn-to-code",
            "description": "A list of awesome resources for learning to code",
            "updated_at": "2020-08-12T18:21:53Z"
    }]
    };

var repos = [];

var repo = {
    "name": "awesome-learn-to-code",
    "html_url": "https://github.com/gcnit/awesome-learn-to-code",
    "description": "A list of awesome resources for learning to code",
    "updated_at": "2020-08-12T18:21:53Z"
};


db.connect(url,connectionParams).then(
    () => {
       app.post('/api/create/developer', (req,res) => {

    var data = req.body;
    var git_id = data["github_id"];
    var linkedin_id = data["linkedin_id"];
    var codechef_id = data["codechef_id"];
    var hackerrank_id = data["hackerrank_id"];
    var twitter_id = data["twitter_id"];
    var medium_id = data["medium_id"];

    data = fetch(`https://api.github.com/users/${git_id}`).then(
        (response) => {return response.json();}
    ).then(
        (data) => {
            temp["id"] = git_id;
            temp["avatar_url"] = data["avatar_url"];
            temp["name"] = data["name"];
            temp["company"] = data["company"];
            temp["blog"] = data["blog"];
            temp["location"] = data["location"];
            temp["bio"] = data["bio"];
            temp["email"] = data["email"];
            temp["github_id"] = git_id;
            temp["linkedin_id"] = linkedin_id;
            temp["hackerrank_id"] = hackerrank_id;
            temp["codechef_id"] = codechef_id;
            temp["medium_id"] = medium_id;
            temp["twitter_id"] = twitter_id;
            return temp;
        }
    ).then(
        (temp) => {
            data = data = fetch(`https://api.github.com/users/${git_id}/repos`).then(
                (response) => {return response.json();}
            ).then(
                (data) =>{
                    Object.entries(data).forEach(([key, value]) => {

                        repo = {};
                        
                        repo["name"] = value["name"];
                        repo["html_url"] = value["html_url"];
                        repo["description"] = value["description"];
                        repo["updated_at"] = value["updated_at"];
                        
                        repos.push(repo);
                        
                    } );
                    
                    temp["repos"] = repos;
                    repos = [];

                    const dev = new devInfo({
                        id : temp["id"],
                        avatar_url : temp["avatar_url"],
                        name : temp["name"],
                        company : temp["company"],
                        blog : temp["blog"],
                        location : temp["location"],
                        email : temp["email"],
                        bio : temp["bio"],
                        github_id : temp["github_id"],
                        linkedin_id : temp["linkedin_id"],
                        codechef_id : temp["codechef_id"],
                        hackerrank_id : temp["hackerrabk_id"],
                        twitter_id : temp["twitter_id"],
                        medium_id : temp["medium_id"],
                        repos : temp["repos"]
                    })

                    dev.save().then(() => {res.send("Completed")});
                    
                    

                }
            )
        }
    )
 
    },

  
);
     app.get('/api/list/developers', (req, res) => {

        var response = [];
        var developer = {};

        const availableDev = devInfo.find({}).then((data) => {res.send(data)});
        
});

    app.get("/api/developers/:id", (req,res) => {

    

        const id = req.params['id'];

        const data = devInfo.findOne({'id':`${id}`}).then((data) => {res.send(data)});
    });
    });


// app.get('/api/list/developers', (req, res) => {

//         var response = [];
//         var developer = {};

    

//     res.send(response);
        
// });



// app.post('/api/create/developer', (req,res) => {

//     var data = req.body;
//     var git_id = data["github_id"];
//     var linkedin_id = data["linkedin_id"];
//     var codechef_id = data["codechef_id"];
//     var hackerrank_id = data["hackerrank_id"];
//     var twitter_id = data["twitter_id"];
//     var medium_id = data["medium_id"];

//     data = fetch(`https://api.github.com/users/${git_id}`).then(
//         (response) => {return response.json();}
//     ).then(
//         (data) => {
//             temp["id"] = git_id;
//             temp["avatar_url"] = data["avatar_url"];
//             temp["name"] = data["name"];
//             temp["company"] = data["company"];
//             temp["blog"] = data["blog"];
//             temp["location"] = data["location"];
//             temp["bio"] = data["bio"];
//             temp["email"] = data["email"];
//             temp["github_id"] = git_id;
//             temp["linkedin_id"] = linkedin_id;
//             temp["hackerrank_id"] = hackerrank_id;
//             temp["codechef_id"] = codechef_id;
//             temp["medium_id"] = medium_id;
//             temp["twitter_id"] = twitter_id;
//             return temp;
//         }
//     ).then(
//         (temp) => {
//             data = data = fetch(`https://api.github.com/users/${git_id}/repos`).then(
//                 (response) => {return response.json();}
//             ).then(
//                 (data) =>{
//                     Object.entries(data).forEach(([key, value]) => {

//                         repo = {};
                        
//                         repo["name"] = value["name"];
//                         repo["html_url"] = value["html_url"];
//                         repo["description"] = value["description"];
//                         repo["updated_at"] = value["updated_at"];
                        
//                         repos.push(repo);
                        
//                     } );
                    
//                     temp["repos"] = repos;
//                     repos = [];
//                     developers.push(temp);
//                     res.send(developers);
                    

//                 }
//             )
//         }
//     )


//     // res.send(developers);
// })



// app.get("/api/developers/:id", (req,res) => {


//     var developer = {};


    // console.log(developer["id"]);

//     for(var i=0; i<developers.length;i++){
//         if(developers[i]["id"] == String(req.params.id)){
//             developer = developers[i];
//             break;
//         }
//     }
//     res.send(developer);
// })


// app.delete('/api/developers/:id', (req,res) => {
//     console.log(delete developers[req.params.id]);
//     res.send(developers);
    
// })



// app.get("/api/github/:id", (req,res) => {

//     data = fetch(`https://api.github.com/users/${req.params.id}`).then(
//         (response) => {return response.json();}
//     ).then(
//         (data) => {
//             temp["id"] = req.params.id;
//             temp["avatar_url"] = data["avatar_url"];
//             temp["name"] = data["name"];
//             temp["company"] = data["company"];
//             temp["blog"] = data["blog"];
//             temp["location"] = data["location"];
//             temp["bio"] = data["bio"];
//             temp["email"] = data["email"];
//             return temp;
//         }
//     ).then(
//         (temp) => {
//             data = data = fetch(`https://api.github.com/users/${req.params.id}/repos`).then(
//                 (response) => {return response.json();}
//             ).then(
//                 (data) =>{
//                     Object.entries(data).forEach(([key, value]) => {

//                         repo = {};
                        
//                         repo["name"] = value["name"];
//                         repo["html_url"] = value["html_url"];
//                         repo["description"] = value["description"];
//                         repo["updated_at"] = value["updated_at"];
                        
//                         repos.push(repo);
                        
//                     } );
                    
//                     temp["repos"] = repos;
//                     developers[temp["id"]] = temp;
//                     res.send(developers);

//                 }
//             )
//         }
//     )
// })






app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});