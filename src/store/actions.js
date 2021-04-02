export default {
    changeTasks({ commit }, newTask){
        console.log('action change task ', newTask); 
        commit('CHANGE_TASK', newTask)
    },
    toggleForm({commit}){
        commit('TOGGLE_FORM');
    },
    cancelForm({commit}){
        commit('CANCEL_FORM');
    },
    handleSearch({commit}, strSearch){
        commit('HANDLESEARCH', strSearch)
    }
}