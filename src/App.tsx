import React from 'react';

const App = () => {

    React.useEffect(() => {
        window.electronAPI.getMemory().then(result => {
          console.log('result', result);
        })
    }, []);

    return <div>App</div>;
};

export default App;
