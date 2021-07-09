const express = require('express');
const router = express.Router();
const axios = require("axios");
const developers = [{
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
}];
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get('/', (req, res) => {
    res.status(200).send(developers);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const data = developers.filter(dev => dev.id === id);
    if (data.length) {
        res.status(200).send(data);
    } else {
        res.status(400).send("User does not exist");
    }
});

router.post('/', (req, res) => {
    try {
        const requestData = req.body;
        const githubUrl = requestData.github_id;
        const splittedGithubUrl = githubUrl.split("/");
        const githubUserName = splittedGithubUrl[splittedGithubUrl.length - 1];
        let found = 0;
        for (let i = 0; i < developers.length; i++) { if (developers[i]["id"] == githubUserName) { found = 1; break; } }
        if (found == 0) {
            axios.get("https://api.github.com/users/" + githubUserName)
                .then(response => {
                    response.data.id = githubUserName;
                    response.data.linkedIn_url = req.body.linkedin_id;
                    response.data.codechef_id = req.body.codechef_id;
                    response.data.hackerrank_id = req.body.hackerrank_id;
                    response.data.twitter_id = req.body.twitter_id;
                    response.data.medium_id = req.body.medium_id;
                    axios.get(response.data.repos_url).then(res => { response.data.repos = res.data; });
                    console.log(response.data);
                    developers.push(response.data);
                    res.status(201).send({
                        "id": response.data.id
                    })
                });
        } else {
            res.send("Developer is already present")
        }
    } catch (err) {
        res.status(400).send("Something went wrong");
    }
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    developers.splice(developers.findIndex(data => data.id === Number(id)), 1);
    res.status(204).send(`${id} developer info is deleted`);
});
module.exports = router;