import React from 'react'
import SearchField from './SearchField'
import git from './gitapi';

class MyForm extends React.Component {
  state = { total: 0, users: []};

  handleSubmit = async (term) => {
    var response = await git.get('/search/users', {
      params: { q: term }
    });
    this.setState({ 
        total: response.data.total_count, 
        users: response.data.items 
      });
  }

  render() {
    return (
      <div>
        <h1>form example </h1>
        <SearchField onSubmit={this.handleSubmit} />
        <p>Found {this.state.total} records</p>
      </div>
    )
  }
}

export default MyForm