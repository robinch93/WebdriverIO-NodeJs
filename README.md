# WebdriverIO-JavaScript
Implementation of WebdriverIO automation test framework using nodejs. 
[Chai](https://www.chaijs.com/) library used for assertions. 

**Setup**
- `git clone https://github.com/robinch93/WebdriverIO-JavaScript.git`

**Run on Local**
1. Download [Node.js](https://nodejs.org/en/)
2. `npm install`
3. `make search-test-local`
4. `make checkout-test-local`

**Run on Docker**

1. Download [Docker](https://docs.docker.com/get-docker/) 
2. `make search-test-docker`
3. `make checkout-test-docker`

**Run On Jenkins** </br>

- Run `docker-compose up -d`
- Access Jenkins instance at: `http://localhost:8085`
- Use `admin` as username and `admin` as password for login.
- Click on the job `webdriverio-test`
- Click on `Build Now` button to trigger the job build.
