import * as React from 'react';
import { Socket } from './Socket';

import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';

export class Submit extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      item_name : '',
      author_name: '',
      course_name: '',
      isbn: '',
      price: '',
      condition: '',
      description: '',
      category:'',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeItemName = this.handleChangeItemName.bind(this);
    this.handleChangeAuthorName = this.handleChangeAuthorName.bind(this);
    this.handleChangeCourseName = this.handleChangeCourseName.bind(this);
    this.handleChangeISBN = this.handleChangeISBN.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeCondition = this.handleChangeCondition.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    
  }
  handleSubmit(event){
      event.preventDefault();
    //   *** Textbook information is sent from client to server ***
      Socket.emit('new submit', {
          'item_name': this.state.item_name,
          'author_name': this.state.author_name,
          'course_name': this.state.course_name,
          'isbn': this.state.isbn,
          'price': this.state.price,
          'condition': this.state.condition,
          'description': this.state.description,
          'category': this.state.category
      });
    //   In order to clear the input field after sending the message.
      this.setState({
          item_name: '',
          author_name: '',
          course_name: '',
          isbn: '',
          price: '',
          condition: '',
          description: '',
          category: ''
      });
      console.log('Item submitted to server!',this);
      console.log('Item Name:', this.state.item_name);
      console.log('Author Name:', this.state.author_name);
      console.log('Course Name:', this.state.course_name);
      console.log('ISBN:', this.state.isbn);
      console.log('Price:', this.state.price);
      console.log('Condition:', this.state.condition);
      console.log('Description:', this.state.description);
      console.log('Category', this.state.category);
    }
    
    handleChangeItemName(event) {
        this.setState({item_name: event.target.value});
        console.log('user_message', event.target.value);
    }
    
   
    
    handleChangeAuthorName(event){
        this.setState({author_name: event.target.value});
        console.log('author_name: ', event.target.value);
    }
    handleChangeCourseName(event){
        this.setState({course_name: event.target.value});
        console.log('course_name: ', event.target.value);
    }
    handleChangeISBN(event){
        this.setState({isbn: event.target.value});
        console.log('isbn: ', event.target.value);
    }
    handleChangePrice(event){
        this.setState({price: event.target.value});
        console.log('price: ', event.target.value);
    }
    handleChangeCondition(event){
        this.setState({condition: event.target.value});
        console.log('condition: ', event.target.value);
    }
    handleChangeDescription(event){
        this.setState({description: event.target.value});
        console.log('description: ', event.target.value);
    }
    handleChangeCategory(event){
        this.setState({category: event.target.value});
        console.log('category: ', event.target.value);
    }
    
    
    
    
  render() {
    return (
      <div>
        {/*Header component is here*/}
        <Header/>
        {/*Navbar component is here*/}
        {/* <Nav/> */}
        
        <div>
            <nav id = "marketplace-navbar">
                <div className = "nav-container">
                    <div className = "big-bar">
                        <div className = "logo">
                            <a href="#"><span className = "J">J</span><span className = "A">A</span><span className = "R">R</span><span className = "S">S</span></a>
                        </div>

                        <div className = "sell-logout">
                            <Link className = "sell-link" to="/marketplace">Go back to Search</Link>
                            {/*Google Logout button is here*/}
                            <div> <Logout/> </div>
                        </div>
                    </div>
                </div>
            </nav>
      
            <section id = "post-book">
                <div className = "container">
                    <form className = "post-book-form" onSubmit = {this.handleSubmit}>
                        <div>
                            <input className="input-box name-input" type="text" name="name" size = "100" placeholder="Name of the book" value = {this.state.item_name} onChange = {this.handleChangeItemName}/>
                        </div>
                        <div className = "author-category">
                            <div>
                                <input className="input-box author-input" type="text" name="author" size = "50" placeholder="Name of the Author" value = {this.state.author_name} onChange = {this.handleChangeAuthorName}/>
                            </div>
                            
                            <div>
                                <input className="input-box category-input" type="text" name="category" size = "50" placeholder="Category" value = {this.state.category} onChange = {this.handleChangeCategory}/>
                            </div>
                        </div>
                        
                        <div className = "course-isbn">
                            <div>
                                <input className="input-box course-input" type="text" name="course" size = "50" placeholder="Morgan Course Name" value = {this.state.course_name} onChange = {this.handleChangeCourseName}/>
                            </div>
                            
                            <div>
                                <input className="input-box isbn-input" type="text" name="isbn" size = "50" placeholder="ISBN" value = {this.state.isbn} onChange = {this.handleChangeISBN}/>
                            </div>
                        </div>
                        
                        <div className = "price-condition">
                            <div>
                                <input className="input-box price-input" type="text" name="price" size = "50" placeholder="Price" value = {this.state.price} onChange = {this.handleChangePrice}/>
                            </div>
                            
                            <div>
                                <input className="input-box condition-input" type="text" name="condition" size = "50" placeholder="Condition of the book" value = {this.state.condition} onChange = {this.handleChangeCondition}/>
                            </div>
                        </div>
                        
                        <div>
                            <textarea className="textarea-input input-box" cols="100" rows="2" name = "textarea" size = "50" placeholder = "Enter some description of your textbook..." value = {this.state.description} onChange = {this.handleChangeDescription}></textarea>
                        </div>
                        
                        {/*Upload file option is here*/}
                        {/*<div name = "file" class = "file-input">
                            <input type="file" onChange={this.fileChangedHandler}/>
                            <button onClick={this.uploadHandler}>Upload!</button>
                        </div>*/}
                       
                        
                        
                        {/*Submit button*/}
                        <div>
                            <button className="post-book-submit" name = "submit">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </section>
        </div>
        
        {/*Footer component is here*/}
        <Footer/>
      </div>
    );
  }
}
