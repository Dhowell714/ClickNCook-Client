let APIURL = '';

switch (window.location.hostname) {

    // case 'localhost' || '127.0.0.1':
    //     APIURL = 'http://localhost:3000';
    //     break;

        case 'https://dj-cooking-app.herokuapp.com':

        APIURL = 'https://dj-cooking-app.herokuapp.com'
}

export default APIURL;