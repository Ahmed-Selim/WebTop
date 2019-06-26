// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDXTGcUBMxNwJe69QX4R3rFEyz1jxQ3sWc',
    authDomain: 'onlineos-66c25.firebaseapp.com',
    databaseURL: 'https://onlineos-66c25.firebaseio.com',
    projectId: 'onlineos-66c25',
    storageBucket: '',
    messagingSenderId: '668271911057'
  },
  api: 'http://localhost:9000/api/',
  API: 'http://localhost:8000/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
