describe('matcher', function() {
	var matcher = require('matcher');
	it('should return the same body when no statements are found', function() {
		var noStmts = 'one\ntwo';
		matcher(noStmts).should.be.eql(noStmts);
	});
	it('should eliminate all "// if node" ... "// end" statements', function() {
		var multipleStmts = 'one\n// if node\ntwo\nthree\n// end\nfour\n// if node\nfive\n// end';
		matcher(multipleStmts).should.be.eql('one\nfour');
	});
	it('should eliminate statements irregardless of the spacing', function() {
		var moreSpacesStmts = '    //   if node   \n//end';
		matcher(moreSpacesStmts).should.be.eql('');
	});
});
