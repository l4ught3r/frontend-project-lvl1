install : #npm ci
	npm ci
brain-games:  #start brain-games
	node bin/brain-games.js
publish: #publish
	npm publish --dry-run
lint : #npx eslint
	npx eslint .
fix : #eslint fix 
	npx eslint --fix .
brain-even: #start brain-even
	node bin/brain-even.js
brain-calc: #start brain-calc
	node bin/brain-calc.js
brain-gcd: #start brain-gcd
	node bin/brain-gcd.js
brain-progression: #start brain-progression
	node bin/brain-progression.js
brain-prime: #start brain-prime
	node bin/brain-prime.js
	