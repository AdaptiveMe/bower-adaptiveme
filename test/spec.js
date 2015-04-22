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
