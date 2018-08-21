# web-sockets-experiment

Run ``$ npm install`` to install modules and then run ``$ webpack`` to  take files in the ``./src`` folder and concatenate them into one js file in the order based on their ES6 imports in ``build/bundle.js`` that should then be minified into ``build/bundle.min.js`` using uglify and then transpiled by babel inside the same folder.
