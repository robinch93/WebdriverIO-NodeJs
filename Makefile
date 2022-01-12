all::help

help:	# to get all commands        
	@grep '^[^#[:space:]].*:' Makefile 

search-test-docker:	# run travel search test on docker (chrome is headless)
	@echo "run travel search test with docker"
	docker-compose up -d
	docker exec -it nodejs npm run test_travel

checkout-test-docker:	# run checkout test on docker (chrome is headless)
	@echo "run checkout test with docker"
	docker-compose up -d
	docker exec -it nodejs npm run test_travel
	
search-test-local:	# run travel search test on local
	@echo "run travel search test on local"
	npm install 
	npm run test_travel

checkout-test-local:	# run checkout test on local
	@echo "run checkout test on local"
	npm install
	npm run test_checkout
