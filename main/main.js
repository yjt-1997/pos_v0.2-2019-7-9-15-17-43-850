'use strict';

function printReceipt(inputs) {
	var database = loadAllItems();
	var buyedGoods = [];
	for(var i=0;i<6;i++)
		buyedGoods[i]=0;
	for(var i=0;i<inputs.length;i++){
		var num = parseInt(inputs[i].substr(4));
		buyedGoods[num]++;
	}
	var result = "***<没钱赚商店>收据***\n";
	var sum = 0;
	for(var i=0;i<buyedGoods.length;i++){	
		if(buyedGoods[i]!=0){
			var tempSum = buyedGoods[i] * parseFloat(database[i].price);
			sum += tempSum;
			result += "名称："+database[i].name+"，数量："+buyedGoods[i]+database[i].unit+"，单价："+database[i].price.toFixed(2)+"(元)，小计："+tempSum.toFixed(2)+"(元)\n";
		}
	}
	result += "----------------------\n总计："+sum.toFixed(2)+"(元)\n**********************";
	console.log(result);
}