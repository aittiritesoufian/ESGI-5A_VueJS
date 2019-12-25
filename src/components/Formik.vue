<template>
    <form @submit="onSubmit">
        <slot></slot>
        <button type="submit" >Submit</button>
    </form>
</template>

<script>
export default {
    name: "Formik",
    props: {
        fields: Array
    },
    methods: {
        onSubmit: function(e){
            e.preventDefault();
            this.$emit('onSubmit', { ...this.fields });
        }
    }
}
</script>