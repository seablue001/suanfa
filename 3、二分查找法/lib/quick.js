// 快速排序，用于后续的二分查找开始前的排序处理，使数据有序
function qSort(list) {
	// 检查数组的长度是否为0，是则不需要任何排序，返回空数组
	if(list.length ===0 ) {
		return [];
	}
	// 创建两个数组，一个left用来存放比基准小的元素，另一个right存放比基准值大的元素
	var left = [];
	var right = [];
	// 基准值取自数组的第一个元素
	var pivot = list[0];

	// 遍历数组，根据它们与基准值的关系放到合适的数组中
	for(var i = 1; i< list.length; i++) {
		if(list[i] < pivot) {
			left.push(list[i]);
		} else {
			right.push(list[i]);
		}
	}

	// 然后对于较小的数组和较大的数组分别递归调用这个函数
	return qSort(left).concat(pivot, qSort(right));
}