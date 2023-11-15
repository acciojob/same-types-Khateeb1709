function isSameType(value1, value2) {
  let a=typeof(value1);
	let b =typeof(value2);
	if(value1==NaN && value2==NaN){
		return true;
	}
	else if(a===b && a!=NaN && b!=NaN){
		return true;
	}else{
		return false;
	}
}


let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
