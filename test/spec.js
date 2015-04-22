'use strict';

var fs = require("fs"), 
	vm = require('vm'),
	GitHubApi = require("github"),
	expect = require('expect.js');

// Load adaptive library into the node context
vm.runInThisContext(fs.readFileSync('adaptive.js'));

describe('bower-adaptiveme', function () {

  /**
   * Test to try the current API version of the platform
   */
  it('Check API version', function (done) {

    var api_version = Adaptive.AppRegistryBridge.getInstance().getAPIVersion();
	
	var github = new GitHubApi({
		version: "3.0.0"
	});
	
	github.authenticate({
		type: "token",
		token: "W4/j5NW+URP85LYVcTgLMxXRJtYN4bTS959V238oQ2uJNXJRTYAplhXijRf07CVoi4KJTHwDat1eK47rw2kC7tSrFM/wvf9Y8gluXZluXk1gbDzcHLEhRHh/dQIXvEXGEGguQxA26z+P5L/40hIB/R8vzdwZKTbc7mVu3g6zA24="
	});
	
	github.repos.getTags({
		user: 'AdaptiveMe',
		repo: 'adaptive-arp-api',
		page: 0,
		per_page: 1
	}, function(error, result){
		if (error) {
			console.log("ERROR: " + error);
		} else {
			expect(result[0].name).to.equal(api_version);
			done();
		}
	});
  });

});
