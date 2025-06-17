const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  video: true,
    videosFolder: 'cypress/videos',
  e2e: {
    specPattern: "**/*.feature",
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
     allureWriter(on, config);
     return config;
   
    },
    
  
  
  },

  


});


// module.exports = defineConfig({
//   e2e: {
//     specPattern: "**/*.feature",
//     setupNodeEvents(on, config) {
//       on("file:preprocessor", cucumber());
//       allureWriter(on, config);

//       // Add your custom task here
//       on("task", {
//         getScreenshotAbsolutePath({ screenshotPath }) {
//           const absolutePath = path.resolve(screenshotPath);
//           console.log("Screenshot Path:", absolutePath);
//           return absolutePath;
//         },
//       });

//       return config;
//     },
//   },
// });