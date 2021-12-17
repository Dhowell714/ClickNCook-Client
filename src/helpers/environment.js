let APIURL = '';

switch (window.location.hostname) {

     case 'localhost' || '127.0.0.1':
         APIURL = 'https://dj-cooking-app.herokuapp.com';
         break;

        case 'dj-react-click-n-cook.herokuapp.com':

        APIURL = 'https://dj-cooking-app.herokuapp.com'
}

export default APIURL;