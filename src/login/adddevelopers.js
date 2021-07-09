import React, { Component } from 'react'
import './adddeveloper.css'

class add_developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      github: '',
      linkedin: '',
      codechef: '',
      hackerrank: '',
      twitter: '',
      medium: ''
    };
  }

  handleSubmit = (event) => {
    const object1 = {
      'github_id': this.state.github,
      'linkedin_id': this.state.linkedin,
      'codechef_id': this.state.codechef,
      'hackerrank_id': this.state.hackerrank,
      'twitter_id': this.state.twitter,
      'medium_id': this.state.medium
    };
    fetch('/api/developers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object1)
    }).then(alert('A name was submitted: ' + this.state.github));
    event.preventDefault();
  }

  render() {
    return (
      <div id="design">
        <header id="header3">
          <h1 id="homeTitle">The Developer Repository</h1>
          <img id="homeImg" src="../images/homeimg.png" alt="" />
        </header>
        <form id="adddeveloper" onSubmit={this.handleSubmit}>
          <h2 id="Title">Add developer profile</h2>
          <hr />
          <label className="inputTitle">
            <img src="../images/iconfinder_github_317712.png" alt="github" />
            Github*:
          </label>
          <input type="text" value={this.state.github} onChange={(e) => { this.setState({ github: e.target.value }) }} />

          <label className="inputTitle">
            <img src="../images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png" alt="linkedin" />
            Linkedin:
          </label>
          <input type="text" value={this.state.linkedin} onChange={(e) => { this.setState({ linkedin: e.target.value }) }} />
          <label className="inputTitle">
            <img src="../images/codechef-1324440139527402917_32.png" alt="codechef" />
            Codechef:
          </label>
          <input type="text" value={this.state.codechef} onChange={(e) => { this.setState({ codechef: e.target.value }) }} />
          <label className="inputTitle">
            <img src="../images/iconfinder_160_Hackerrank_logo_logos_4373234.png" alt="hackerrank" />
            HackerRank:
          </label>
          <input type="text" value={this.state.hackerrank} onChange={(e) => { this.setState({ hackerrank: e.target.value }) }} />
          <label className="inputTitle">
            <img src="../images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png" alt="twitter" />
            Twitter:
          </label>
          <input type="text" value={this.state.twitter} onChange={(e) => { this.setState({ twitter: e.target.value }) }} />

          <label className="inputTitle">
            <img src="../images/iconfinder_Circled_Medium_svg5_5279113.png" alt="medium" />
            Medium:
          </label>
          <input type="text" value={this.state.medium} onChange={(e) => { this.setState({ medium: e.target.value }) }} />
          <hr />
          <div id="buttonallign">
            <a className="button" id="cancel" href="../">Cancel</a>
            <button id="submit" className="button" type="submit" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default add_developer;