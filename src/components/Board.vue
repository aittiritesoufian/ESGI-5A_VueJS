<template>
    <div class="board">
        <div class="board-name">{{ name }}</div>
        <div class="board-list">
            <list
            v-for="list in lists"
            v-bind:key="list.id"
            v-bind:list="list"
            v-bind:onNewCard="handleNewCard">

            </list>
        </div>
    </div>
</template>

<script>
import List from "./List.vue"
export default {
    name: "Board",
    components: {
        list: List
    },
    data: () => ({
        lists: [
            {name:"1", cards:[
                {name:"test", waiting:1, status:"done"},
                {name:"test", waiting:0}
            ]},
            {name:"2", cards:[
                {name:"test", waiting:1},
                {name:"test", waiting:0}
            ]},
            {name:"3", cards:[
                {name:"test", waiting:1},
                {name:"test", waiting:0}
            ]}
        ],
        name: "Board 1",
    }),
    methods: {
        handleNewCard: function(card, into){
            console.log(this.lists);
            this.lists = this.lists.map(list => {
                if(into.name === list.name) {
                    return {...list,cards:[card, ...list.cards]};
                } else {
                    return list;
                }
            });
            console.log(card);
        }
    },
}
</script>

<style scoped>
.board {
    display:flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    background-color: green;
}
.board-name {
    width:100%;
    text-align: center;
}
.board-list {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    background-color: red;
}
a {
    color:darkgreen;
}
</style>