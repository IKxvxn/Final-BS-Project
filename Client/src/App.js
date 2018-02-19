import React from 'react'
import 'font-awesome/css/font-awesome.css'

import ExampleContainer from './Example/exampleContainer'

const App = () => {

    return (
      <div>
        {/*Espacio para topBar*/}
        <div>
          {/*Espacio para demás contenido*/}
          <ExampleContainer />
        </div>
      </div>
    );
}


export default App