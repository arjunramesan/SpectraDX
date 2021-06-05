import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import comingSoon from './components/comingSoon/comingSoon.component';

function App() {
  return (
   <Router>
    <Route path="/" exact component={comingSoon} />
   </Router>
  );
}

export default App;
