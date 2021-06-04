import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Kontak extends Component {
     render(){
          return(
               <div style = {{width : '100%', margin : 'auto' }} >
                    <Grid className = "beranda-grid">
                         <Cell col={12}>

                              <div className = "banner">
                                   <h1> Find me on:</h1>
                                   <hr/>
                                   <p> Click icon below </p>

                                   <div className = "social-links">
                                        <a href = "https://www.facebook.com/salmaniajesamine.putri" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-whatsapp-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.facebook.com/salmaniajesamine.putri" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-facebook-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://twitter.com/jesamineputri" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-twitter-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://github.com/Salmania27" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-github-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.instagram.com/jesamineputri" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-instagram-square" aria-hidden="true"/>
                                        </a>
                                        <a href = "https://www.youtube.com/channel/UCGTbQJ5NcPJgLH3VgQQ-byg" rel = "noopener noreferrer" target = "_blank">
                                             <i className= "fa fa-youtube-square" aria-hidden="true"/>
                                        </a>
                                   </div>
                              </div>
                         </Cell>
                    </Grid> 
               </div>
          )
     }
}

export default Kontak;