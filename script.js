function isSameType(value1, value2) {
  //your js code here
	var s1 = typeof(value1);
	var s2 = typef(value2);

	if(s1 == s2)return true;
	else return false;
}

do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
