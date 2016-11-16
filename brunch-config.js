module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
       joinTo:{
        'app.css': /^(app)/,
        'vendor.css': /^vendor/
       }
    }
  },
  
  server:{
    hostname:'0.0.0.0'    //Enables access from other computers
  },
   npm: {
    enabled: true
    // styles:{
    //     bootstrap:['dist/css/bootstrap.css']
    // },
    // globals: {
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   bootstrap: 'bootstrap' // require bootstrap JavaScript globally
    // }
  }
};