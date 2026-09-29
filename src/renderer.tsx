import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';

function ReactRoot() {


     useEffect(() => {
       window.electronAPI.anyName().then(result => {
         console.log('result', result);
       })
   }, []);



    return (
        <>
            <h1>hi</h1>
        </>
    );
}

const root = createRoot(document.getElementById('app')!);

root.render(<ReactRoot />);
