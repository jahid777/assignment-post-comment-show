import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import CommentDetails from './Components/CommentDetails/CommentDetails';


function App() {
  return (
    <Router>
       <Switch>
         <Route path="/home">
            <Home></Home>
         </Route>
          <Route path="/post/:postId">
            <CommentDetails></CommentDetails>
          </Route>
         <Route exact path="/">
            <Home></Home>
         </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
       </Switch>
    </Router>
  );
}

export default App;
