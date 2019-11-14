import * as React from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Socket } from './Socket';


export class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        'be_rendered': []
    };
    
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  // ***** A list received from server to client(here) for rendering *****
  componentDidMount(){
      Socket.on('be rendered', (data) => {this.setState({'be_rendered': data['render_list']})});
      console.log("*************")
      console.log('Render list state:', this.state);
      console.log(this.state.be_rendered)
  }
  
  render() {
    let final_render_list = this.state.be_rendered;
    console.log("Final render list:",final_render_list);
    
    return (
      <div>
        {/*Header component is here*/}
        <Header/>
        {/*Nav component is here*/}
        <Nav/>
      
        <section id = "listing-section">
            <div className = "container">
                <div className = "listing">
                
                    { final_render_list.map (each_list =>
                    <li key = {each_list[0].id} className = "unit-listing">
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
        
        {/*Footer component is here*/}
        <Footer/>
      </div>
    );
  }
}
