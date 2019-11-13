import * as React from 'react';
import { Socket } from './Socket';


export class Upload extends React.Component {
    constructor(props) {
        super(props);
            
    fileChangedHandler = (event) => {
        const file = event.target.files[0];
    };

    uploadHandler = () => {};
    state = { selectedFile: null };

    fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    };

    uploadHandler = () => {
     console.log(this.state.selectedFile);
    };
    
    // uploadHandler = () => {
      
    //     Socket.emit('new_photo'){
    //         'my-domain.com/file-upload': formData
    //     }

}
    
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler}/>
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
    );
  }
}
