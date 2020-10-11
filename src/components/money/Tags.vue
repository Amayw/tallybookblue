<template>
    <ol class="tags">
        <li v-for="tag in tagsList" :class="tag.id===selectedTagId?'active':''" :key="tag.id">
            <Icon :name="tag.icon"/>
            <span>{{tag.name}}</span>
        </li>
    </ol>
</template>

<script lang="ts">
    export default {
        name: 'Tags',
        props: ['tagsList','selectedTagId']
    };
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
            > .icon {
                width: 60px;
                height: 40px;
            }

            > span {
                font-size: 14px;
            }
        }
        >li.active{
            background-color: #cde0da;
            border: 1px solid #9fc4b7;
            border-radius: 10px;
        }
    }
</style>