 
insert Link where you want the link


DEFINING LINKS

This part "renders" by running in the background supporting the links. here we define the links:

1. router - wraps all - needed at root - this allows react router to pass the history or current location of where the route is to other nested components

inside the router tag: route

2. route - when path x appears, render this component.

in order to say this, we pass 2 props to each route tag:

path / exact path = "/about"
component = {About}

- the "/" should ALWAYS BE "exact path", otherwise it will render its component with any path that has "/"
- don't use "exact" if you expect to add extra paths to the initial one (like /about/mel)

self / components
used -
Navbar
Wrapper
Footer
routed -
about
disocver
search

RENDERING LINKS

Where will you render actual links? Navbar

import { Link } from "react-router-dom";

For each link, use the prop called 'to':

 <Link className="navbar-brand" to="/">
      Pupster
    </Link>

classname can depend on location:

    <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>

Summary

So Links always require routes

we can set up "nested links"

<Link to="/about/mel"> </Link>

BUT this would require that we define a route:

So - where this <Route / > tag is is where the mel comonent will apppear:

<Route path="/about/mel" component={mel} />

why isn't this nested in a <Router>?
Because its part of a component that's used inside of another that is wrapped by a <Router> tag...

_match_

We could also do this:

<Route path="/about/:topicId" component={Topic}>

now whatever comes after /about/ will appear in the props object in Topic component

if you go to the component:

Topic=({match} => ) {
console.log(match) // an object
console.log(match.params.topicId)
}

stopped 1742

https://www.youtube.com/watch?v=3B588JwyT18

The parent will have this Route.. This is actual using a Topics child component ->

      <Route path="/topics" component={Topics} />

Route will pass in a match object into the child:

function Topics({ match }) {

    which uses:

       <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
