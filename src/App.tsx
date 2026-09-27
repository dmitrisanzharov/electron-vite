import React from 'react';

const App = () => {
    const [memory, setMemory] = React.useState<number | null>(null);

    React.useEffect(() => {
        const loadMemory = async () => {
            const memory = await window.electronAPI.getMemory();

            console.log('memory:', memory);
        };

        loadMemory();
    }, []);

    return <div>App</div>;
};

export default App;
