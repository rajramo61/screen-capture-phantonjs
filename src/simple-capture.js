const page = require('webpage').create();
page.open('https://google.com/', function (status) {
    if (status === 'success') {
        page.viewportSize = { width: 1280, height: 800 };
        page.paperSize = { width: '5in', height: '7.5in', margin: '0px' };
        try {
            console.log("before PDF creation");
            page.render('google.pdf');
            console.log("after PDF creation");
        } catch (e) {
            console.error("Could not create PDF.", e)
        } finally {
            console.debug("exiting phantomjs");
            phantom.exit();
        }
    }
});
