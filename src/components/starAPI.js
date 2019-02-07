import React, { Component } from 'react';







class StarWarsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }

ComponentDidMount = () => {
  var url = 'https://swapi.co/api';
  fetch(url).then(response => response.json())
    .then(data => console.log(data.people, data.films));
}




  render() {
    const { hits } = this.state;

    return (
      <div>
      <ul>
        {hits.map(hit =>
          <li key={hits.objectID}>
            <a href={hits.url}>{hits.title}</a>
          </li>
        )}
      </ul>
    </div>
    );
  }
}


export default StarWarsAPI;
