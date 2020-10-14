<template>
    <ol class="tags">
        <li @click="changeSelectedTag(tag.id)" v-for="tag in tagsList" :class="tag.id===selectedTagId?'active':''" :key="tag.id">
            <Icon :name="tag.icon"/>
            <span >{{tag.name}}</span>
        </li>
    </ol>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue{
        // props: ['tagsList','selectedTagId']
        @Prop(Array)  tagsList: object[] | undefined;
        @Prop(Number) selectedTagId: number | undefined;
        changeSelectedTag(id: number){
            if(id!==this.selectedTagId){
                this.$emit('update:selectedTagId',id);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .tags {
        overflow: auto;
        background: #f8f8f8;
        padding: 2px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        > li {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;
            margin: 10px;
            max-height: 100px;
            > .icon {
                width: 46px;
                height: 46px;
            }

            > span {
                font-size: 14px;
            }

            &.active{
                background-color: #cde0da;
                border: 1px solid #9fc4b7;
                border-radius: 10px;
            }
        }
    }
</style>