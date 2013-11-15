var Person = Object.cMsubClass({
    init: function(isDancing) {
        this.dancing = isDancing;
    },
    dance: function() {
        return this.dancing;
    }
});

var Ninja = Person.cMsubClass({
    init: function() {
        this.cMsuper.init(false);
    },
    dance: function() {
        return this.cMsuper.dance();
    },
    swingSword: function() {
        return true;
    }
});

test( "inheritance test", function() {
    var person = new Person(true);
    ok(person.dance(), "person is dancing");
    var ninja = new Ninja();
    ok(ninja.swingSword(), "sword swinging");
    ok(!ninja.dance(), "ninja isn't dancing");
    ok(person instanceof Person, "person instance of Person");
    ok(ninja instanceof Ninja, "ninja instance of Ninja");
    ok(ninja instanceof Person, "ninja instance of Person");
});
