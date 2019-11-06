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
            <div class = "container">
                <div class = "listing">
                    <div class = "unit-listing">
                        <h4 class = "book-name">Advanced Calculus</h4>
                        <p class = "author">by Barak Obama</p>
                        <div class = "course-isbn">
                            <div class = "course">
                                <p>Course: MATH334</p>
                            </div>
                            <div class = "isbn">
                                <p>ISBN: 978-1999579517</p>
                            </div>
                        </div>
                        <div class = "price-condition">
                            <div class = "price">
                                <h4> $20.00</h4>
                            </div>
                            <div class = "condition">
                                <p>Conditon: Mint</p>
                            </div>
                        </div>
                        <div class = "seller-contact-seller">
                            <div class = "Seller">
                                <p> Seller: Ashely Wilson </p>
                            </div>
                            <div class = "contact-seller">
                                <button>Contact Seller</button>
                            </div>
                        </div>
                        <p class = "description"> A book selling from a Morgan Senior Student.</p>
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
