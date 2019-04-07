nums = [-10, 5, -2, -1, 1, 2, -3, 3, 10,11],
temp = 0;

 
// Вывести положительные числа через одно. Не работает. None!
result	= '';
  for ( var i = 0, j = 0; i < nums.length; i ++ ){ 
    if (nums[i] > 0 && (!(j % 2) || j == 0 )) {
		    j ++;
	}}
	result += nums[j] + ' ';
console.log('Положительные числа через одно: ',result);


// Сделать по парную перестановку элементов в массиве.  Done!
result	= '';
	for(var i = 0; i < nums.length; i += 2) {
		temp = nums[i];        
		nums[i] = nums[i + 1]; 
		nums[i + 1] = temp;               
	}
result	=	nums.join(' ');
console.log('По парная перестановка элементов в массиве:',result);
 


