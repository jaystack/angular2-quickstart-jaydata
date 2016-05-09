/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'odatajs':                    'js/odatajs-4.0.0.js',
    'jaydata/core':               'js/jaydata.js',
    'jaydata/odata':              'js/jaydataproviders/oDataProvider.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages,
    meta: {
      'jaydata/core': {
          format: 'cjs'
      },
      'jaydata/odata': {
          format: 'cjs',
          deps: ['odatajs', 'jaydata/core']
      },
      'odatajs': {
          format: 'global'
      },
      './JayDataContext': {
          deps: ['odatajs', 'jaydata/core', 'jaydata/odata']
      }
    }
  }

  System.config(config);

})(this);
