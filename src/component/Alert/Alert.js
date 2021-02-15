import React from 'react';

const App = ( props ) => {
    return (
    <div class={`alert ${props.type}`} role="alert">
        {props.message}
    </div>
    )
}

export default App;