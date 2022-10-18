import Form from "./pages/InvoiceForm";
import Invoice from "./pages/Home";
import './pages/styles.css'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Form} />
        <Route path='/invoice' component={Invoice} />
      </Switch>
    </div>
  );
}

export default App;
