import React, { Component } from 'react';

import Search from './component/Search';
import BeritaTerkini from './component/BeritaTerkini';
import ContentBlog from './component/ContentBlog';

class AppContentSearch extends Component {
  render() {
    return (
        <div className="App">
            <Search />

        <div className="container">
            <div className="row">
                <BeritaTerkini/>
                <ContentBlog/>
            </div>
        </div>
        </div>
    );
  }
}

export default AppContentSearch;