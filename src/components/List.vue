<template>
    <div class="list">
        <h1>{{ list.name }} {{ list.cards|countDone }}</h1>
        <div class="list-cards">
            <card
            v-for="card in list.cards"
            v-bind:key="card.id"
            v-bind:card="card"/>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue"
export default {
    name: "List",
    components: {
        card: Card
    },
    props: {
        list:Object
    },
    filters: {
        countDone: function(cards) {
            return cards.filter(card => card.status && card.status === "done").length;
        }
    }
}
</script>

<style scoped>
.list {
    width: 20%;
    min-width: 20%;
    max-width: 20%;
    max-height: 100%;
    display: flex;
    flex-direction: columns;
    background-color: blue;
}
</style>