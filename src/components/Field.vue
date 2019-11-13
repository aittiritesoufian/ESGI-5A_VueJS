<template>
    <fieldset>
        <label :for="id">{{label}}</label>
        <select v-if="type == 'select'" :id="id" :name="name" :placeholder="placeholder">
            <option
                v-for="option in options"
                :key="option.id"
                :list="option"
                :selected="option.value == value">{{ option.label }}</option>
        </select>
        <input 
            v-if="type == 'checkbox' || type == 'radio'"
            v-for="option in options"
            :key="option.id"
            :list="option"
            :id="option.id"
            :type="type"
            :name="name"
            :value="option.value"
            :placeholder="option.label"
            :checked="option.value == true"
            />
        <input 
            v-if="type != 'select'"
            :id="id"
            :type="type"
            :name="name"
            :value="value"
            :placeholder="value"
            
            />
    </fieldset>
</template>

<script>
export default {
    name:"Field",
    props:{
        label: String,
        name: String,
        id: String,
        type: String,
        value: String,
        placeholder: String,
        options: Object

    }
}
</script>

<style scoped>

</style>