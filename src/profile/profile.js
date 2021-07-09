import React, { Component } from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

class Profile extends Component {
    state = {
        Name: '',
        bio: '',
        company: '',
        blog: '',
        email: '',
        location: '',
        links: [
            '',
            '',
            '',
            '',
            '',
            ''
        ],
        repos: []
    }
    componentDidMount() {
        try {
            fetch('/api' + this.props.location.pathname)
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        Name: data[0].name,
                        bio: data[0].bio,
                        company: data[0].company,
                        blog: data[0].blog,
                        email: data[0].email,
                        location: data[0].location,
                        links: [
                            data[0].github_id,
                            data[0].linkedin_id,
                            data[0].codechef_id,
                            data[0].hackerrank_id,
                            data[0].twitter_id,
                            data[0].medium_id
                        ],
                        repos: data[0].repos
                    }); console.log(this.state)
                })
        } catch (err) {
            console.log("Something went wrong");
        }
    }

    render() {
        return (<div>
            <header id="header2">
                <h4 id="mag">The developer Profile</h4>
                <h4>All Developers</h4>
            </header>
            <div id="developersInfo">
                <img src="../images/account_circle-24px.svg" id="profilepic" alt="pro" />
                <div id="info">
                    <h2 id="Name">{this.state.Name}</h2>
                    <p id="intro">{this.state.bio}</p>
                    <div id="links">
                        <a href={"https://github.com/"+this.state.links[0]}><img src="../images/iconfinder_github_317712.png" alt="link1" /> <i className='fa fa-external-link redirect'></i></a>
                        <a href={"https://www.linkedin.com/in/"+this.state.links[1]}><img src="../images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png" alt="link2" /> <i className='fa fa-external-link redirect'></i></a>
                        <a href={"https://www.codechef.com/users/"+this.state.links[2]}><img src="../images/codechef-1324440139527402917_32.png" alt="link3" /> <i className='fa fa-external-link redirect'></i></a>
                        <a href={"https://www.hackerrank.com/"+this.state.links[3]}><img src="../images/iconfinder_160_Hackerrank_logo_logos_4373234.png" alt="link4" /> <i className='fa fa-external-link redirect'></i></a>
                        <a href={"https://twitter.com/"+this.state.links[4]}><img src="../images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png" alt="link5" /> <i className='fa fa-external-link redirect'></i></a>
                        <a href={"https://medium.com/"+this.state.links[5]}><img src="../images/iconfinder_Circled_Medium_svg5_5279113.png" alt="link6" /> <i className='fa fa-external-link redirect'></i></a>
                    </div>
                    <div id="company">
                        <img src="../images/location_on-24px.svg" alt="company_icon" />
                        {this.state.location}
                        <img src="../images/business-24px.svg" alt="workicon" />
                        {this.state.company}
                    </div>
                </div>
            </div>
            <div id="repos">
                <h1>GitHub Repositories</h1>
                <hr/>
                {
                    this.state.repos.map((repo) => {
                        if (repo.description === '') {
                            return (<div><div className='repo'>
                                <div className="repo_name">
                                    <h3 className="h3">{repo.name}</h3>
                                    <a href={repo.html_url} ><img src="../images/north_east-24px.svg" alt={repo.name} /></a>
                                    <h5>{repo.updated_at}</h5>
                                </div>
                            </div>
                                <hr /></div>
                            )
                        }
                        return (<div><div className='repo'>
                            <div className="repo_name">
                                <h3 className="h3">{repo.name}</h3>
                                <a href={repo.html_url} ><img src="../images/north_east-24px.svg" alt={repo.name} /></a>
                                <h5>{repo.updated_at}</h5>
                            </div>
                            <p>{repo.description}</p>
                        </div>
                            <hr /></div>
                        )
                    })
                }
            </div>
        </div>)
    }
}
export default Profile;