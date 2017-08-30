/**
 过滤undefined，null值
*/
export default function filterUndefined(value) {
	if(!value){
		return'';
	}
	return value;
}