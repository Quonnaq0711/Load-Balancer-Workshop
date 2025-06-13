import fetch from 'node-fetch';

// (async () => {
//     for (let i = 0; i < 10; i++) {
//         const res = await fetch('http://localhost:8000');
//         const text = await res.text();
//         console.log(`Response: ${text}`);
//     }
// })();


// 10 calls simultaneously
(async () => {
    const urls = Array(10).fill('http://localhost:8000');

    const requests = urls.map(url => fetch(url).then(res => res.text()));

    const responses = await Promise.all(requests);

    responses.forEach((text, i) => {
        console.log(`Response ${i + 1}: ${text}`);
    });
})();