# ie-angular-ref-app — the intelligent environment's reference seed app in angular js

## Getting Started

To get you started you can simply clone the ie-angular-ref-app repository and install the dependencies:

### Prerequisites

You need git to clone the ie-angular-ref-app repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize ie-angular-ref-app. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone ie-angular-ref-app

Clone the ie-angular-ref-app repository using [git](http://git-scm.com/):

```
git clone https://github.com/CurrentByGE/ie-angular-ref-app.git
cd ie-angular-ref-app
```
### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.com/).
* We get the angular code via `bower`, a [client-side code package manager](https://bower.io/).

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
ie-angular-ref-app changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

To deploy the application to cloud foundry, please check for below dependencies.

1) Install CF CLI (Cloud Foundry Command Line Interface) from this website: https://github.com/cloudfoundry/cli.  
- Go to the Downloads Section of the README on the GitHub and download the correct package or binary for your operating system.
- Check that it is installed by typing `cf` on your command line.  

2) Be sure that CURL is installed on your machine
- Executing in your terminal `curl --version` should return a valid version number
- For Windows, this needs to be done by installing Cygwin
- Cywgin with Curl: http://stackoverflow.com/questions/3647569/how-do-i-install-curl-on-cygwin

3) Be sure to set your environment proxy variables before trying to run the script.

```
export ALL_PROXY=http://<proxy-host>:<proxy-port>
export HTTP_PROXY=$ALL_PROXY
export HTTPS_PROXY=$ALL_PROXY
export http_proxy=$ALL_PROXY
export https_proxy=$ALL_PROXY
```

### Predix Platform and Cloud Foundry
Traffic Seed App is using Predix Platform and Cloud Foundry to push the application to cloud. If you do not have account created in Predix, please click [here](https://www.predix.io/) to create one.

For more information on using Predix platform and Cloud Foundry, check [this](https://predix-io.run.asv-pr.ice.predix.io/resources) website.

### Login to Cloud Foundry
Use the below command to login to Cloud Foundry:
```
cf login
```

It will prompt for the email and password. Give the email and password which you have used to create the predix account. It might ask you to select an org (if you have more than one org) then select the one showing your email. It will result as below:

```
cf login
API endpoint: https://<api.system.aws-usw02-pr>.ice.predix.io

Email> user.email@company.com # predix account email

Password> ****** # predix account password
Authenticating...
OK

Select an org (or press enter to skip):
1. intelligent_environments
2. user.email@company.com

Org> 2
Targeted org user.email@company.com

Targeted space dev



API endpoint:   https://<api.system.aws-usw02-pr>.ice.predix.io (API version: 2.51.0)   
User:           user.email@company.com  
Org:            user.email@company.com
Space:          dev   

```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  ie_details/                --> the ie_details view template and logic
    ie_controller.js              --> the controller logic
    ie_details.html            --> the ui template
    ie_route.js              --> the routes
    ie_service.js         --> the service logic
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
```
## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The ie-angular-ref-app project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server](https://github.com/indexzero/http-server).  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


### Deploying the App in Cloud Foundry

To deploy the application to cloud foundry, please make sure you are under the `app/` directory.
```
cd <App_Root>/app
```

As per above steps, if you are already logged in to cloud foundry, use below command to push the application. If not logged in to cloud found please follow the steps mentioned in 'Login to Cloud Foundry' and come back to below step.
```
cf push -b staticfile_buildpack <your-app-name>
```
It will generate the output as below

```
Showing health and status for app <your-app-name> in org user.name@email.com / space dev as user.name@email.com...
OK

requested state: started
instances: 1/1
usage: 1G x 1 instances
urls: <your-app-name>.run.aws-usw02-pr.ice.predix.io
last uploaded: Wed Jul 27 22:53:18 UTC 2016
stack: cflinuxfs2
buildpack: staticfile_buildpack

     state     since                    cpu    memory        disk          details   
#0   running   2016-07-27 03:53:37 PM   0.0%   17.6M of 1G   52.8M of 1G      
```

Use the 'urls: <your-app-name>.run.aws-usw02-pr.ice.predix.io' part from above output to access the application.
For eg, if your application is deployed with command 'cf push -b staticfile_buildpack ie-angular-ref-app' then to access the application use the below url.

```
https://ie-angular-ref-app.run.aws-usw02-pr.ice.predix.io
```

## Updating Angular

Previously we recommended that you merge in changes to ie-angular-ref-app into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.
