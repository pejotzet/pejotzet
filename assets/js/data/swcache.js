const resource = [
    /* --- CSS --- */
    '/pejotzet/assets/css/style.css',

    /* --- PWA --- */
    '/pejotzet/app.js',
    '/pejotzet/sw.js',

    /* --- HTML --- */
    '/pejotzet/index.html',
    '/pejotzet/404.html',

    
        '/pejotzet/categories/',
    
        '/pejotzet/tags/',
    
        '/pejotzet/archives/',
    
        '/pejotzet/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/pejotzet/assets/img/favicons/android-chrome-192x192.png',
        '/pejotzet/assets/img/favicons/android-chrome-512x512.png',
        '/pejotzet/assets/img/favicons/apple-touch-icon.png',
        '/pejotzet/assets/img/favicons/favicon-16x16.png',
        '/pejotzet/assets/img/favicons/favicon-32x32.png',
        '/pejotzet/assets/img/favicons/favicon.ico',
        '/pejotzet/assets/img/favicons/mstile-150x150.png',
        '/pejotzet/assets/js/dist/categories.min.js',
        '/pejotzet/assets/js/dist/commons.min.js',
        '/pejotzet/assets/js/dist/home.min.js',
        '/pejotzet/assets/js/dist/misc.min.js',
        '/pejotzet/assets/js/dist/page.min.js',
        '/pejotzet/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'pejotzet.github.io',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

