import React from 'react'
import ReactDOM from 'react-dom'
import Route from 'react-route'

import Search from './search'
import SearchResults from './search_results'
import DocView from './doc_view'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchQuery: ""}
  }

  search(query) {
    this.setState({
      searchQuery: query
    })
  }

  render() {
    return (
      <div>
        <Route path="/">
          <header>
            <Search onSearch={(query) => this.search(query)} style={{float: "right"}}/>
            <h1>Council Enrichment Crowd</h1>
          </header>
          <SearchResults query={this.state.searchQuery}/>
        </Route>
        <Route path="/doc/:docId">
          <DocView/>
        </Route>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app-container'))
