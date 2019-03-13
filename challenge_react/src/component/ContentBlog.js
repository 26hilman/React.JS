import React, { Component } from 'react';

import PropTypes from "prop-types";

// class ContentBlog extends Component {
//   render() {
//     return (
//       <div class="col-md-8">

//         <h3 class="my-4">What is Lorem Ipsum?</h3>

//         <div class="card mb-4">
//           <img class="card-img-top" src={require("../assets/img/img-header.png")} alt="Card image cap"/>
//           <div class="card-body">
//             <h4 class="card-title">What is Lorem Ipsum?</h4>
//             <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//             <a href="#" class="btn btn-primary">Read More &rarr;</a>
//           </div>
//           <div class="card-footer text-muted">
//             Posted on January 1, 2019 by
//             <a href="#"> Alterra Academy</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const ContentBlog = props =>{
  return (
      <div class="card mb-4 my-4">
      <h3 class="my-4" style={{textAlign:"center"}}>{props.title}</h3>
           <img class="card-img-top" src={props.img} alt="Card image cap"/>
           <div class="card-body">
             <p class="card-text">{props.content}</p>
             <a href="#" class="btn btn-primary">Read More &rarr;</a>
           </div>
        <div class="card-footer text-muted">
             {props.publishedAt} <br></br>
             by {props.author}
        </div>
      </div>
    
  );
}

ContentBlog.propTypes = {
  title :  PropTypes.string.isRequired,
  publishedAt : PropTypes.string.isRequired,
  content : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ContentBlog;