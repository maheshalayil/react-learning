import React from 'react'
import SearchField from './SearchField'

class MyForm extends React.Component {

  handleSubmit = (term) => {
    console.log(`from parent ${term}`);
  }
  
  render() {
    return (
      <div>
        <h1>form example </h1>
        <SearchField onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default MyForm