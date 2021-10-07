
const counterReducer = (state = null, action) => {
  switch (action.type) {
    case 'play':
      if(state!=null)
        state.pause()
        state = action.data 
        state.play()
        return state        
    case 'pause':
        state.pause()
        return state 
    default:
      return state
       
  }
}

export default counterReducer


// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'play':
//         action.data.play()
//         return state + 1
//     case 'pause':
//         state = 0
//         action.data.pause()
//         return state 
//     default:
//       return state
       
//   }
// }

// export default counterReducer