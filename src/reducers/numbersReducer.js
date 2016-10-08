export default function numbersReducer(state = [], action) {
  switch(action.type){
    case 'ADD_NUMBER' :
      return [...state,
      Object.assign({}, action.number)
      ];

    default:
      return state;
  }
}
