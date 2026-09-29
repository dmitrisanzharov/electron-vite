import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

function ReactRoot() {
    useEffect(() => {
        (window as any).electronAPI.anyName().then((result: any) => {
            console.log('result in renderer', result);
        });
    }, []);

    return (
        <>
            <h1>hi</h1>
        </>
    );
}

const root = createRoot(document.getElementById('app')!);

root.render(<ReactRoot />);
