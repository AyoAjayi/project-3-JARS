import * as React from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';


export class Marketplace extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/*Header component is here*/}
        <Header/>
        {/*Nav component is here*/}
        <Nav/>
      
        <section id = "listing-section">
            <div className = "container">
                <div className = "listing">
                    <div className = "unit-listing">
                        <h4 className = "book-name">Advanced Calculus</h4>
                        <p className = "author">by Barak Obama</p>
                        <div className = "course-isbn">
                            <div className = "course">
                                <p>Course: MATH334</p>
                            </div>
                            <div className = "isbn">
                                <p>ISBN: 978-1999579517</p>
                            </div>
                        </div>
                        <div className = "price-condition">
                            <div className = "price">
                                <h4> $20.00</h4>
                            </div>
                            <div className = "condition">
                                <p>Conditon: Mint</p>
                            </div>
                        </div>
                        <div className = "seller-contact-seller">
                            <div className = "Seller">
                                <p> Seller: Ashely Wilson </p>
                            </div>
                            <div className = "contact-seller">
                                <button>Contact Seller</button>
                            </div>
                        </div>
                        <p className = "description"> A book selling from a Morgan Senior Student.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/*Footer component is here*/}
        <Footer/>
      </div>
    );
  }
}
