import * as React from 'react';

import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';

export class Submit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/*Header component is here*/}
        <Header/>
        {/*Navbar component is here*/}
        <Nav/>
      
        <section id = "post-book">
            <div class = "container">
                <form class = "post-book-form">
                    <div>
                        <input class="input-box" type="text" name="" placeholder="Name of the book"/>
                    </div>
                    <div>
                        <input class="input-box" type="text" name="" placeholder="Name of the Author"/>
                    </div>
                    <div class = "input-course-isbn">
                        <div>
                            <input class="input-box" type="text" name="" placeholder="Morgan Course Name"/>
                        </div>
                        <div>
                            <input class="input-box" type="text" name="" placeholder="ISBN"/>
                        </div>
                    </div>
                    <div class = "input-price-condition">
                        <div>
                            <input class="input-box" type="text" name="" placeholder="Price"/>
                        </div>
                        <div>
                            <input class="input-box" type="text" name="" placeholder="Condition of the book"/>
                        </div>
                    </div>
                    <div>
                        <textarea className="input-textarea input-box" cols="50" rows="2" placeholder = "Enter some description of your textbook..." ></textarea>
                    </div>
                    <div>
                        <button class="post-book-submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
        {/*Footer component is here*/}
        <Footer/>
      </div>
    );
  }
}
