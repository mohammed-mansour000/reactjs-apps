import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: [
            {id:1, title:'first Article'},
            {id:2, title:'second Article'},
            {id:3, title:'third Article'}
      ],
      remoteArticles: 
      [
        
      ]
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      // state.articles.push(action.payload);
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)        
      });
    }    
    if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
    return state;
  };
  
  export default rootReducer;
