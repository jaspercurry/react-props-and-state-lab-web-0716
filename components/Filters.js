const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: this.props.filters.type}
    // this.filterChange = this.filterChange.bind(this)
  }

  filterChange(event) {
    this.setState({value: event.target.value})
    this.props.onChangeType(event.target.value)
  }

  find

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.value} onChange={this.filterChange.bind(this)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
