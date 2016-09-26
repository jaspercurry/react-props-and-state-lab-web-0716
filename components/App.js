const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onChangeType = this.onChangeType.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onChangeType(value) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: value
      })
    })

  }

  onFindPetsClick() {
    let state = this.state.filters.type
    if (state == "all") {
      return fetch('/api/pets')
    } else if (state == "cat") {
      return fetch('/api/pets?type=cat')
    } else if (state == "dog") {
      return fetch('/api/pets?type=dog')
    } else if (state == "micropig") {
      return fetch('/api/pets?type=micropig')
    }

  }

  onAdoptPet(petID) {
    this.state.adoptedPets.push(petID)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
