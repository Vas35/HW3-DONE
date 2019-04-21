// Вывести положительные числа через одно. Well Done!
nums = [-10, 5, -2, -1, 1, 2, -3, 3, 10,],
result	= '',
j = 0;
  for ( var i = 0; i < nums.length; i ++ ){ 
    if (nums[i] >= 0) {
		if (!(j % 2)) {
			result += nums[i] + ' ';
		}
		    j ++; 
  }} 
	
console.log('Положительные числа через одно: ',result);
