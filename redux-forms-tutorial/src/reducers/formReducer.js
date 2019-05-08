
const myReducer = (state= [100], action) =>{
        switch(action.type){
          case 'CREATE':
          return state + parseFloat(action.payload.title)

          default:
          return state
        }
}
export default myReducer;