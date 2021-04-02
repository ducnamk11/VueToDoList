<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="handleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleSearch"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'control-search',
    data() {
        return { }
    },
    computed: mapState(['strSearch']),
    methods: {
        ...mapActions(['handleSearch']),
        handleClear() {
            // Thay đổi giá trị strSearch về ''
            this.$emit('handleSearch', '');
        },
    }
}
</script>

<style>

</style>
