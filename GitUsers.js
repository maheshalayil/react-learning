import React from 'react';

export default class GitUsers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list = this.props.users.map(x => <li className="list-group-item">{x.login}</li>)
    return (
      <div>
        <ul className='list-group'>{list}</ul>
      </div>      
    );
  }
}