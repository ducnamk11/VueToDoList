export default {
	listTashSearch: state=>{
        const { strSearch } = state;
        
        var newItems = state.listTask.filter(item => {
            return item.name.toLowerCase().includes(strSearch.toLowerCase());
        });
        return newItems;
    }
}