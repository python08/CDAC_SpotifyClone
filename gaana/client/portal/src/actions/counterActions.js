

export const play = (audio) => {
  
  return {
    type: 'play',
    data: audio
  }
}

export const pause = (audio) => {
  return {
    type: 'pause',
    data: audio
  }
}




// export const play = (audio) => {
//   return {
//     type: 'play',
//     data: audio
//   }
// }

// export const pause = (audio) => {
//   return {
//     type: 'pause',
//     data: audio
//   }
// }






// export const increment = () => {
//   return {
//     type: 'increment',
//   }
// }

// export const decrement = () => {
//   return {
//     type: 'decrement',
//   }
// }
