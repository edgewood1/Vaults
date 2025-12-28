Router

`import { BrowserRouter as Router, Route } from "react-router-dom";`

Router - main wrapper
Route - an actual route

```jsx
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
```

Child
 
```jsx
<li className="nav-item">
  <Link
    to="/"
    className={
      window.location.pathname === "/" ? "nav-link active" : "nav-link"
    }
  >
    Home
  </Link>
</li>
```