<template>
    <div class="list">
        <h1>{{ list.name }} {{ list.cards|countDone }}</h1>
        <div class="list-cards">
            <card
            v-for="card in list.cards"
            v-bind:key="card.id"
            v-bind:card="card"/>
        </div>
        <p v-on:click.prevent="toggleForm()">+ Show card</p>
        <NewCard v-if="showForm"></NewCard>
    </div>
</template>

<script>
import Card from "./Card.vue"
import NewCard from "./NewCard.vue"
export default {
    name: "List",
    components: {
        card: Card,
        NewCard
    },
    props: {
        list:Object
    },
    data: () => {
        showForm: true
    },
    filters: {
        countDone: function(cards) {
            return cards.filter(card => card.status && card.status === "done").length;
        }
    },
    methods: {
        toggleForm: function(){
            this.showForm = !this.showForm;
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