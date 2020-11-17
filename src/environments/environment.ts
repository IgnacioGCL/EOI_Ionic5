// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backUrl: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: 'AIzaSyCu3rk04KXFsyr2senSThmFR100QEooMv0',
    authDomain: 'blog-eoi-fullstack.firebaseapp.com',
    databaseURL: 'https://blog-eoi-fullstack.firebaseio.com',
    projectId: 'blog-eoi-fullstack',
    storageBucket: 'blog-eoi-fullstack.appspot.com',
    messagingSenderId: '738494127544',
    appId: '1:738494127544:web:ced40725ea202af503834d'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
