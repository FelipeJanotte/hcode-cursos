export default{
    state:{
        clubName: 'Hcode Treinamentos123',
    },
    getters:{
      getClubName(state){
          return state.clubName
      },
    },
    mutation:{
      setClubName(state, newName){
        state.clubName = newName

      }
    },
    actions:{
      updateClubName(context, value){
        context.commit('setClubName', value)
      }
    }
}