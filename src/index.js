import dva from 'dva';
import { browserHistory, hashHistory } from 'dva/router';
import { message } from 'antd';
import { MSG_DURATION } from './utils/constant';
import './index.css';

// 1. Initialize
const app = dva({
    history: browserHistory,
    onError(e) {
    	message.error(e.message, MSG_DURATION);
  	},
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/app'));
app.model(require('./models/menu'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
