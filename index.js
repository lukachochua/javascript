// Comparison Operators

// Crossroads - look right, check for cars, look left, check for cars. IF those statements are true, you cross the road.

//Equals operator
'hello' == 'Hello'; // returns false, cuz it's case sensitive.
null == undefined; // returns true. theyy both mean same kind of thing and they polymorph. 
NaN; // Doesn't compare. Never use NaN with comparison operators. 

// Double and triple Equals operators
10 == '10'; // Returns true - string data type takes precendence in this '==' case. to prevent this happenening we use:
null === undefined; // returns false. cuz they're different type of data types. This is strict comparison, so no polymorphism here. 

// Is not operator
null != null; // answer is false - they're not different.

10 != '10'; // returns false - they're equal in this case - polymorphism happening. to prevent this we need to:
10 !== '10'; // now it returns true, as strict comparison takes datatypes in consideration.  same with 'null' and 'undefined'.

// Greater than/less than operators

10 > 100; // false - as ten isn't greater hundred. can use it with strings. longer string is greater than shorter. capital letters ruin this logic. 
10 >= 10; // ofc returns true. greater than or equals operator.
10 < 100; // true ofc. can use <= operator too. Don't recommend to use them with strings.

