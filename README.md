# An example for javascript BDD
## Usage
### 1. clone
    $ git clone https://github.com/hiraku/js-bdd-example.git
    Cloning into 'js-bdd-example'...
    remote: Counting objects: 25, done.
    remote: Compressing objects: 100% (20/20), done.
    remote: Total 25 (delta 1), reused 25 (delta 1), pack-reused 0
    Unpacking objects: 100% (25/25), done.
    Checking connectivity... done.

### 2. init and update submodule
    $ cd js-bdd-example/
    $ git submodule init
    Submodule 'test/vendor/blanket' (git@github.com:alex-seville/blanket.git) registered for path 'test/vendor/blanket'
    Submodule 'test/vendor/chai' (git@github.com:chaijs/chai.git) registered for path 'test/vendor/chai'
    Submodule 'test/vendor/mocha' (git@github.com:mochajs/mocha.git) registered for path 'test/vendor/mocha'
    $ git submodule update
    Cloning into 'test/vendor/blanket'...
    remote: Counting objects: 5880, done.
      (snip)

### 3. open index.html or other html file
