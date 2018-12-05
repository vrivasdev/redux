import { fromJS } from 'immutable';
import schema from '../schemas/index.js';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: [],
})
/*
  NOTE: Immutable states / maps or lists
  obj => map
  array => list
*/

function data(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = [];
      if (action.payload.query) {
        state.data.categories.forEach( category => {
          results = results.concat(
                      category.playlist.filter( item => {
                        return item.author.toLowerCase()
                                   .includes(action.payload.query.toLowerCase())
          }))
        })
      }
      return {
        ...state,
        search: results
      }
    }
    default:
      return state;
  }
}

export default data;
