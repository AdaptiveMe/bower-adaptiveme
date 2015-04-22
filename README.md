# AdaptiveMe Javascript Lybraries
[![Build Status](https://travis-ci.org/AdaptiveMe/bower-adaptiveme.svg?branch=master)](https://travis-ci.org/AdaptiveMe/bower-adaptiveme) 
[![Codacy Badge](https://www.codacy.com/project/badge/41c1f612d1c3475eafc1343994706fb1)](https://www.codacy.com/public/carlos/bower-adaptiveme) 
[![GitHub tag](https://img.shields.io/github/tag/AdaptiveMe/bower-adaptiveme.svg)](https://github.com/AdaptiveMe/bower-adaptiveme) 
[![Bower](https://img.shields.io/bower/v/adaptiveme.svg)](https://travis-ci.org/AdaptiveMe/bower-adaptiveme)
[![License](https://img.shields.io/badge/license-apache%202-blue.svg)](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE) 
[![Adaptive Manager for Bower](https://img.shields.io/badge/devtools-bower-yellow.svg)](https://github.com/AdaptiveMe/bower-adaptiveme)
[![adaptive.me](https://img.shields.io/badge/adaptive-me-fdcb0e.svg)](http://adaptive.me)
[![Adaptive Runtime Platform](https://raw.githubusercontent.com/AdaptiveMe/AdaptiveMe.github.io/master/assets/logos/normal/Logo-devtools-for-Bower.png)](#)

## Introduction

### About This Project

Bower Adaptive is a set of definitions and implementation files that allow you to interact between an HTML5 application and the Adaptive Native Core (Darwin, Android and Windows). The Typescript/Javascript layer defines a unique middleware layer for all the native paltforms and HTML5 frameworks. This libraries are distributed throught [Bower](http://bower.io/search/?q=adaptiveme), in order to include easily in your HTML5 project.  

#### Prerequisites

* You should [**NodeJS**]((https://nodejs.org)) installed on your machine before proceeding with the installation. If you don't have it, please download it from [here](https://nodejs.org/download/) for your platform. 
	* If you don't know whether you have it installed, open up a ```terminal```or ```cmd prompt``` and issue the following command ```node -v```.
	* The above command should respond with at least the following NodeJS version ```v0.12.0```.
* It's highly recommended to have installed [**Typescript**](http://www.typescriptlang.org/) to use all the power of the Adaptive Javascript Library. To install typescript you could run: 

    ```npm install -g typescript```

    * Type ```tsc -v``` to check that you have installed typescript correctly.

#### Installation

[**Bower**](http://bower.io/) it's a command line utility and you could install it with npm:
```
npm install -g bower
```
Type ```bower -v``` to check that you have installed typescript correctly.

#### What's included?

There are some files included in the project, This are the main important files:

- **adaptive.js**: Library file, this file includes all the variables and functions to comunicate your application to the Native Platform.
- **adaptive.d.ts**: Typescript Declarations File. If you want to develop in Typescript you could include this definitions file to call easily the methods and functions from typescript.
- **adaptive.js.map**: Javascript Source Map. This dile allow you to debug code in production after the uglify process. Normally this is used by the DevTools of the browsers.

#### Usage

To include the adaptive javascript libraries into your project:

1. Create, if you haven't yet a **bower.json file** and include this line:

    ```json
    {
      "name": "test",
      "description": "test",
      "dependencies": {
        "adaptiveme": "latest"
      }
    }
    ```
2. Run ```bower install``` to download your dependencies. This process will download the library files for the version you have specified in the bower.json file.
3. Include in your html file the reference to the library:

    ```html
    <script src="bower_components/adaptiveme/adaptive.js"></script>
    ```
4. Create a typescript file and include the reference to the definitions file

    ```javascript
    /// <reference path="bower_components/adaptiveme/adaptive.d.ts" />
    var version = Adaptive.AppRegistryBridge.getInstance().getAPIVersion();
    document.getElementById("version").innerHTML = version;
    ```
5. Run ```tsc main.ts``` to generate the javascript file from the typescript. This step could be done manually or you can use some of the typescript watchers provided by the different IDEs.
6. Include the reference to the new javascript created by typescript in your index.html

    ```html
    ...
    <body>
    <span id="version"></span>
    <script src="bower_components/adaptiveme/adaptive.js"></script>
    <script src="main.js"></script>
    </body>
    ```
7. Open the index.html file in your browser

### About Adaptive Runtime Platform

Hybrid apps are applications that are built using HTML5/CSS3/JavaScript web technologies and use a native "containers" to package the app to enable access to the native functionalities of a device. In essence, you can write a rich mobile/wearable/tv application using HTML and JavaScript and package that application as a native app for multiple mobile/wearable/tv platforms and distribute them on the different app stores and markets.

The Adaptive Runtime Platform (ARP) provides these native "containers" to package apps for the main mobile, wearable and desktop platforms... and other platforms as they emerge. Adaptive Runtime Platform (ARP) and sub-projects are open-source under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). The Adaptive Runtime Platform (ARP) project was created by [Carlos Lozano Diez](https://github.com/carloslozano) as part of the [adaptive.me](http://adaptive.me) set of products.

Please refer to the [project site](http://adaptiveme.github.io) for more information.

## Work Backlog

#### Board: [![Stories in Ready](https://badge.waffle.io/AdaptiveMe/bower-adaptiveme.svg?label=ready&title=Ready)](https://waffle.io/AdaptiveMe/bower-adaptiveme)

[![Throughput Graph](https://graphs.waffle.io/AdaptiveMe/bower-adaptiveme/throughput.svg)](https://waffle.io/AdaptiveMe/bower-adaptiveme/metrics)

## Contributing

We'd *love to accept your patches and contributions to this project*.  There are a just a few small guidelines you need to follow to ensure that you and/or your company and our project are safeguarded from inadvertent copyright infringement. I know, this can be a pain but we want fair-play from the very start so that we're all on the same page. Please refer to the [project site](http://adaptiveme.github.io) for more information.

## Attributions

* Adaptive Runtime Platform (ARP) artwork by [Jennifer Lasso](https://github.com/Jlassob).
* Project badge artwork by [shields.io](http://shields.io/).
* All other logos are copyright of their respective owners.

## License
All the source code of the Adaptive Runtime Platform (ARP), including all Adaptive Runtime Platform (ARP) sub-projects curated by [Carlos Lozano Diez](https://github.com/carloslozano), are distributed, and must be contributed to, under the terms of the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html). The [license](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE) is included in this [repository](https://raw.githubusercontent.com/AdaptiveMe/adaptive-arp-api/master/LICENSE).

Forged with :heart: in Barcelona, Catalonia · © 2013 - 2015 [adaptive.me](http://adaptive.me) / [Carlos Lozano Diez](http://google.com/+CarlosLozano).

