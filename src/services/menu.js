import request from '../utils/request';
import { filterUndefined } from '../utils/toolsUtil';

/*
登录
*/
export function getAllMenus(values) {
	const { pageNum, pageSize } = values;
    return request('/api/menu/list?pageSize=' + pageSize +'&pageNum=' + pageNum);
}
