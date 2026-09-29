import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';

function ReactRoot() {

    const [memoryInfo, setMemoryInfo] = useState<any>({})

    useEffect(() => {
                (window as any).electronAPI.getMemoryFromPreload().then((result: any) => {
            console.log('result in renderer', result);
            setMemoryInfo(result);
        });
    }, []);

    return (
        <>
            <h1>hi</h1>
            <h2>totalMemory: {memoryInfo.totalMemory}</h2>
            <h2>freeMemory: {memoryInfo.freeMemory}</h2>
            <h3>Used: {memoryInfo.totalMemory - memoryInfo.freeMemory}</h3>
        </>
    );
}

const root = createRoot(document.getElementById('app')!);

root.render(<ReactRoot />);
