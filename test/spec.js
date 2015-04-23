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
		token: "E7832vIQrs0ILC67BSsPsDVGfDE9kKxHA7hUv3vbi5r7bNy6AnWBDg9Lk/BQpYQGhvV4jFgQ4ex4tmpi31HhUGxISC7qn2BOX1Ivlb9apm34nTSfhf+pfHPVzXTN+wSbKWi0irt4RjyoOjQWN3/by4zoJIu//dT/rSZJRrQYnNo="
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
