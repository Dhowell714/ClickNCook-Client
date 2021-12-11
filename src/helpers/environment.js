let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;

        case 'dj-react-click-n-cook.herokuapp.com':

        APIURL = 'https://dj-react-click-n-cook.herokuapp.com'
}

export default APIURL;