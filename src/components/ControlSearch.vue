<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleSearchClear"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'control-search',
    computed: mapState(['strSearch']),
    methods: {
        handleSearch(e) {
            this.$store.dispatch('handleSearchAction', e.target.value);
        },
         handleSearchClear(e) {
            this.$store.dispatch('handleSearchAction', '');
        },
    }
}
</script>

<style>

</style>
