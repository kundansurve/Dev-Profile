import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        alldevelopers: [],
        searchDevelopers: [],
        isModalOpen: false
    }
    componentDidMount() {
        try {
            fetch("/api/developers")
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        alldevelopers: data,
                        searchDevelopers: data,
                    }); console.log(this.state)
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const filtered = (event) => {
            let Data = [...this.state.alldevelopers]
            let searchedDevs = Data.filter(dev => {
                return dev.id.startsWith(event.target.value);
            });
            this.setState({ searchDevelopers: searchedDevs })
        }

        return (<div id="mainbody">
            <header >
                <h1 id="homeTitle">The Developer Repository</h1>
                <img id="homeImg" src="../images/homeimg.png" alt="home_img"/>
            </header>
            <h2 id="heading">Explore Developers Profile</h2>
            <hr />
            <div id="searchBar">
                <input type="text" placeholder="Search for username" id="search" onInput={(e) => filtered(e)} />
                <img id="searchLogo" src="../images/search-24px.svg" alt="id2" />
            </div>
            <div id="devlist">
                {
                    this.state.searchDevelopers.length > 0 ?
                        this.state.searchDevelopers.map((value) => {
                            console.log(value);
                            console.log(this.state.searchDevelopers);
                            return (<div id={value} className="developers">
                                <img className="developers_img" src="../images/account_circle-24px.svg" alt="icon1" />
                                <h5 className="developersusername">{value.id}</h5>
                                <Link to={'developers/' + value.id}>
                                    <img src="../images/north_east-24px.svg" alt="icon2" />
                                    <i className='fa fa-external-link redirect'></i>
                                </Link>
                            </div>);
                        }) : <div id="empty">Nothing to show</div>}
            </div>
            <hr />
            <div id="devLogin">
                <h3>Could not find what you were looking for?</h3>
                <Link to={'adddeveloper'}>
                    <button type="submit" >
                        <h4>Add developer info</h4>
                        <i className='fa fa-external-link redirect'></i>
                    </button>
                </Link>
            </div>
            <footer>
      <h6>Made with <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#FFFFFF" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>            by Kdsurve</h6>
  </footer>
        </div>);
    }

}
export default Home;