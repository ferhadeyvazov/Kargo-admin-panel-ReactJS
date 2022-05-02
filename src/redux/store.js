import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const store = createStore(
  rootReducer,
  composeWithDevTools(
    //compose..redux-dev tollsdan geldi
    applyMiddleware(logger, thunk)
    // other store enhancers if any
  )
);

export default store;

// /*
// 1.npm e install loggeri yazdix
// 2.store a import etdik
// 3.apply mideleware icine eklediik
// >simdi biz her buy cake edende bu console logda bize gosterecek
// */
