<template>
    <div>
        <div class="grid-row">
            <label for="title">Title :</label>
            <input id="title"/>
        </div>
        <div class="grid-row">
            <label for="description">Description :</label>
            <input id="description"/>
        </div>
        <div class="grid-row">
            <label for="velocity">Velocity :</label>
            <input id="velocity"/>
        </div>
        <div class="grid-row">
            <label>Status:</label>
            <label>New <input type="radio" name="status" value="new"></label>
            <label>Done <input type="radio" name="status" value="done"></label>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewCard"
}
</script>

<style scoped>
    .grid-row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>