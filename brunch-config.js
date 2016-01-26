exports.config = {
  // See http://brunch.io/#documentation for docs.
  npm: {
    enabled: true,
    globals: {
      Reflect: 'es7-reflect-metadata/dist/browser'
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(app\/vendor)|(node_modules)/,
        'main.js': /^app\/(?!vendor)/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  plugins: {
    copyfilemon: {
      fonts: ['node_modules/bootstrap/dist/fonts'],
      lib:   ['node_modules/bootstrap/dist/css/bootstrap.min.css']
    }
  }
};