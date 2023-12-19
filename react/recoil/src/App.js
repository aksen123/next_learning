import './App.css';

import Counter from './components/Counter'; 
import Time from './components/Time';
import Todo from './components/Todo';
import FontButton from './components/Font';


function App() {
  return (
    <div>
      <Counter  />
      <Time  />
      <Todo  />
      <FontButton />
    </div>
  );
}

export default App;
