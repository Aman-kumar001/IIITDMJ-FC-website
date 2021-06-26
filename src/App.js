import './App.css';
import './Events.css';
import { useState, useEffect } from 'react';
import Loading from './Components/Loading'
import Layout from './Components/Layout'



function App() {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     setTimeout(function() {
      setIsLoading(false)
  }, 5);
  }, [])

  return (
    <div className="App">
      {
        isLoading ? (
          <Loading/>
        ) :
         (
          <Layout/>
         )
      }

    </div>
  );
}

export default App;
