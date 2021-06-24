import './App.css';
import { useState, useEffect } from 'react';
import Loading from './Components/Loading'
import Layout from './Components/Layout'



function App() {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     setTimeout(function() {
      setIsLoading(false)
  }, 5000);
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
