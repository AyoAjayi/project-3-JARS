import * as React from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Socket } from './Socket';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';


export class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
        'be_rendered': [],
        search_input : ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSearchInput = this.handleChangeSearchInput.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  // ***** A list received from server to client(here) for rendering *****
  componentDidMount(){
      this._isMounted = true;
      
      Socket.on('be rendered', (data) => {
          if (this._isMounted){
              this.setState({'be_rendered': data['render_list']})
          }
      });
      console.log("*************")
      console.log('Render list state:', this.state);
      console.log(this.state.be_rendered)
  }

  handleSubmit(event){
      event.preventDefault();
    //   *** search_input is sent from client to server ***
      Socket.emit('new search', {
          'search_input': this.state.search_input
      });
      
      console.log('Search submitted to server!',this);
      console.log('Searched Item:', this.state.search_input);
  }
  handleChangeSearchInput(event) {
      this.setState({search_input: event.target.value});
      console.log('search_input:', event.target.value);
  }
  
  render() {
    let final_render_list = this.state.be_rendered;
    console.log("Final render list:",final_render_list);
    
    return (
      <div>
        {/*Header component is here*/}
        <Header/>
        {/*Nav component is here*/}
        {/* <Nav/> */}
        
        <div>
            <nav id = "marketplace-navbar">
                <div className = "nav-container">
                    <div className = "big-bar">
                        <div className = "logo">
                            <a href="#"><span className = "J">J</span><span class = "A">A</span><span class = "R">R</span><span class = "S">S</span></a>
                        </div>
                        <form className = "search" onSubmit = {this.handleSubmit}>
                            <div>
                                <input type="text" name="search-input" className = "search-input" placeholder = "Search for a textbook..." value = {this.state.search_input} onChange = {this.handleChangeSearchInput} />
                            </div>
                            <div>
                                <button>Search</button>
                            </div>
                        </form>
                        <div className = "sell-logout">
                            <Link to="/sell-a-book">Sell a Book</Link>
                            {/*Google Logout button is here*/}
                            <div> <Logout/> </div>
                        </div>
                    </div>
                </div>
            </nav>
      
            <section id = "listing-section">
                <div className = "container">
                    <div className = "listing">
                    
                        { final_render_list.map (each_list =>
                        <li key = {each_list[0]} className = "unit-listing">
                            <h4 className = "book-name">{each_list[0]}</h4>
                            <p className = "author">by {each_list[2]}</p>
                            <div className = "course-isbn">
                                <div className = "course">
                                    <p>Course: {each_list[3]}</p>
                                </div>
                                <div className = "isbn">
                                    <p>ISBN: {each_list[4]}</p>
                                </div>
                            </div>
                            <div className = "price-condition">
                                <div className = "price">
                                    <h4> ${each_list[5]}</h4>
                                </div>
                                <div className = "condition">
                                    <p>Conditon: {each_list[7]}</p>
                                </div>
                            </div>
                            <div className = "seller-contact-seller">
                                <div className = "Seller">
                                    <p> Seller: {each_list[6]} </p>
                                </div>
                                <div className = "contact-seller">
                                    <button>Contact Seller</button>
                                </div>
                            </div>
                            <p className = "description"> {each_list[8]}</p>
                        </li> )}
                        
                    </div>
                </div>
            </section>
        </div>
        
        {/*Footer component is here*/}
        <Footer/>
      </div>
    );
  }
}
