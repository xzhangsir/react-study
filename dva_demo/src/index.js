import dva from "dva";
import "./index.css";
import { createBrowserHistory as createHistory } from "history";
import router from "./router";
// 1. Initialize
// const app = dva();

const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/product').default)
// 如果有多个models 可以这样

require("./models").default.forEach((key) => app.model(key.default));

// 4. Router
// app.router(require('./router').default);
app.router(router);

// 5. Start
app.start("#root");
