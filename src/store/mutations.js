import state from "./state"

export default {
    CHANGE_TASK(state, newTasks) {
        state.listTask = newTasks;
    },
    TOGGLE_FORM(state) {
        if (this.isShowForm) this.taskSelected = null;
        state.isShowForm = !state.isShowForm;
    },
    CANCEL_FORM(state){
        state.isShowForm = false;
    },
    HANDLESEARCH(state, strSearch){
        state.strSearch = strSearch;
    }
}