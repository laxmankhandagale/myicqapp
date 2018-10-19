import React, { Component } from 'react';

class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    };
  }
  onChange(e) {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.warn('This is test :', e.target.result);
      const fileData = e.target.result;
      //const jsondata = JSON.parse(fileData);
      console.warn('Parse Data :', fileData);
    };
  }
  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <h4>Please upload the file</h4>
        <input type="file" name="file" onChange={e => this.onChange(e)} />
      </div>
    );
  }
}

export default UploadFile;
