function firstWord(s) {
  // your code here
	let ans="";
	for(let i=0;i<s.length;i++){
		if(s.charAt(i)!==" "){
			for(let j=i;j<s.length;j++){
				if(s.charAt(j)==" "){
					return ans;
				}
				else{
					ans+=s.charAt(j);
				}
			}
			return ans;
		}
	}
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
