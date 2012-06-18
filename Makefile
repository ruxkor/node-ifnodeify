test:
	@NODE_PATH=lib/ mocha -r should -R spec test/*.js

.PHONY: test
