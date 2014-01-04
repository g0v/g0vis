all:
	livescript -cb index.ls
	sass index.sass index.css
	./node_modules/.bin/jade -P index.jade
