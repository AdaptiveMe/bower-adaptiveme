'use strict';

var fs = require("fs"), 
	vm = require('vm'),
	GitHubApi = require("github"),
	expect = require('expect.js');
	
var gh_token = process.env.GH_TOKEN
var gh_token_node = process.env.GH_TOKEN_NODE
var var1 = process.env.VAR1
var var2 = process.env.VAR2
var var3 = process.env.VAR3
var var4 = process.env.VAR4

console.log('gh_token:'+gh_token);
console.log('gh_token_node:'+gh_token_node);
console.log('var1:'+var1);
console.log('var2:'+var2);
console.log('var3:'+var3);
console.log('var4:'+var4);

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
		token: process.env.GH_TOKEN_NODE
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
