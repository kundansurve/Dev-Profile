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
                        <Link to={this.state.links[0]}><img src="../images/iconfinder_github_317712.png" alt="link1" /> <i className='fa fa-external-link redirect'></i></Link>
                        <Link to={this.state.links[1]}><img src="../images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png" alt="link2" /> <i className='fa fa-external-link redirect'></i></Link>
                        <Link to={this.state.links[2]}><img src="../images/codechef-1324440139527402917_32.png" alt="link3" /> <i className='fa fa-external-link redirect'></i></Link>
                        <Link to={this.state.links[3]}><img src="../images/iconfinder_160_Hackerrank_logo_logos_4373234.png" alt="link4" /> <i className='fa fa-external-link redirect'></i></Link>
                        <Link to={this.state.links[4]}><img src="../images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png" alt="link6" /> <i className='fa fa-external-link redirect'></i></Link>
                        <Link to={this.state.links[5]}><img src="../images/iconfinder_Circled_Medium_svg5_5279113.png" alt="link6" /> <i className='fa fa-external-link redirect'></i></Link>
                    </div>
                    <div id="company">
                        <img src="../images/location_on-24px.svg" alt="company_icon" />
                        {this.state.location}
                        <img src="../images/business-24px.svg" alt="workicon" />
                        {this.state.company}
                        <img src="../images/insert_link-24px (1).svg" alt="insert_icon" />
                        {this.state.blog}
                    </div>
                </div>
            </div>
            <div id="repos">
                <h1>GitHub Repositories</h1>
                <hr />
                {
                    this.state.repos.map((repo) => {
                        if (repo.description === '') {
                            return (<div><div className='repo'>
                                <div class="repo_name">
                                    <h3 className="h3">{repo.name}</h3>
                                    <a href={repo.html_url} ><img src="../images/north_east-24px.svg" alt='k' /></a>
                                    <h5>{repo.updated_at}</h5>
                                </div>
                            </div>
                                <hr /></div>
                            )
                        }
                        return (<div><div className='repo'>
                            <div class="repo_name">
                                <h3 className="h3">{repo.name}</h3>
                                <a href={repo.html_url} ><img src="../images/north_east-24px.svg" alt='k' /></a>
                                <h5>{repo.updated_at}</h5>
                            </div>
                            <p>{repo.description}</p>
                        </div>
                            <hr /></div>
                        )
                    })
                }
            </div>
            <footer>
      <h6>Made with <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#FFFFFF" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>            by Kdsurve</h6>
  </footer>
        </div>)
    }
}
export default Profile;