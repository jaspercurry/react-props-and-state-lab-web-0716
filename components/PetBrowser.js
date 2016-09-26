// const React = require('react');
import React from "react"

const Pet = require('./Pet');


class PetBrowser extends React.Component {

  allPets() {
    return this.props.pets.map((pet) => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet)}/>
    })
  }

  isAdopted(pet) {
    return this.props.adoptedPets.includes(pet.id)
  }


  render() {
    // const petComopnents = this.allPets();
    return (
      <div className="ui cards">
        {this.allPets()}
      </div>
    );
  }
}

module.exports = PetBrowser;
