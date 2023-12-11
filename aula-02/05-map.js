const history = new Map();

history.set('31/12/2022 17:55:03', { url: 'https://google.com', titulo: 'Google'});
history.set('31/12/2022 17:55:03', { url: 'https://twitter.com', titulo: 'Twitter'});
history.set('31/12/2022 17:56:10', { url: 'https://facebook.com', titulo: 'Facebook'});

console.log(history, history.get('31/12/2022 17:56:10'));