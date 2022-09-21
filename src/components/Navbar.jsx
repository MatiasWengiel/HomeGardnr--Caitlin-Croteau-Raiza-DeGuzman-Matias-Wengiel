import React from "react";


export default function Navbar(props) {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav me-auto">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/">Features</a>
            <a class="nav-link" href="/">Pricing</a>
            <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>

    );

   /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="/">Navbar</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav mr-sm-2">
           <div class="navbar-text">Hello, Friend!</div>
           <a class="nav-item nav-link" href="/">My Plants</a>
           <a class="nav-item nav-link" href="/">Add Plants</a>
           <a class="nav-item nav-link" href="/">Weather</a>
           <a class="nav-item nav-link" href="/">Logout</a>
         </div>
        </div>
   </nav>  */

 
}