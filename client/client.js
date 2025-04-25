import fetch from 'node-fetch';

(async () => {
    for (let i = 0; i < 10; i++) {
        const res = await fetch('http://localhost:8000');
        const text = await res.text();
        console.log(`Response: ${text}`);
    }
})();