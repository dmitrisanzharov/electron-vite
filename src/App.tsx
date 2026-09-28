import React from 'react';

const App = () => {
    React.useEffect(() => {
        window.electronAPI.getMemory().then((result) => {
            console.log('result', result);
        });
    }, []);

    return <h3>Hello world</h3>;
};

export default App;
