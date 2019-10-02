<template>
    <div class="card">
        <h1>{{ card.name }}</h1>
    </div>
</template>

<script>
export default {
    name: "Card",
    props:{
        card:Object
    }
}
</script>

<style scoped>
.card {
    width: 100%;
    height:50px;
    background-color: grey;
}
</style>