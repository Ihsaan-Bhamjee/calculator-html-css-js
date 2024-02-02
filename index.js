function delBtn(equation){
	let size = equation.length;
	let newEquation = "";
	if(size>0){
		newEquation = equation.substring(0,size-1);
	}

	return newEquation;
}