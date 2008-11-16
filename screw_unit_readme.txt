
Screw.Unit: http://github.com/nkallen/screw-unit/tree/master  
Introducing Screw Unit:  http://pivotallabs.com/users/nick/blog/articles/433-screw-unit-a-new-js-testing-framework-version-0-1

git clone git://github.com/nkallen/screw-unit.git

Screw Unit Server: http://github.com/btakita/screw-unit-server/tree/master

> # for rails usage, script generators, etc.
> sudo gem install screw-unit
> sudo gem install screw-unit-server
>
> screwunitserver /path/to/your/javascript/spec/files /path/to/your/javascript/implementation/files

Manipulating the Dom:

suite.html:

  <div id="dom_test"></div>

spec_helper.js:

  Screw.Unit(function() {
      before(function() {
            document.getElementById('dom_test').innerHTML = ''; // but use your favorite JS library here.
      });
  });


effen: http://github.com/nkallen/effen/tree/master


