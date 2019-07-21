//Test runner will find the object with name "config", so we have to exports (feature from nodejs) object config for that runner
exports.config = {

    /** Test script */
    specs:[
        "wdio-practice-api/selectDropdown.js"
    ],

    capabilities: [
        {
            browserName: "chrome"
        }
    ],

    /** Config server running test */

    runner: 'local', //Where to run
    hostname: 'localhost',
    port: 9515, 
    path: '//',

    /** Config Test Framework */
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd', //running mode
        timeout: 600000, // Maximum 10 minutes for running a test suite
    },

    /** Reporter configuration */
    reporters: [
        ['junit', {
            outputDir: './report'
        }]
    ],
    
}