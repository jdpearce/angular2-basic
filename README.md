# angular2-basic

A minimalist angular2 project created from scratch. No bells or whistles.

The intent was to create a project with as few moving parts as possible so it would be obvious what was necessary 
and that what it takes to add new features such as AOT compilation, tree-shaking and a smoother build pipeline 
could be isolated and understood more easily.

Current build process is intentionally clunky.

To install :

    git clone https://github.com/jdpearce/angular2-basic
    cd angular2-basic
    npm install

To build :

    npm run build
    cp src/index.html build
    npm run server
    
Or use this if you're on Windows :

    npm run build
    copy src\index.html build
    npm run server
