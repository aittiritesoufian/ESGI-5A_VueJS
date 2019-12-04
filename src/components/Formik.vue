<template>
    <form @submit={onSubmit}>
        <slot></slot>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: "Formik",
    props: {
        inheritAttrs: Object
    },
    methods: {
        onSubmit: function(e){
            e.preventDefault();
            this.$emit('onSubmit', { ...props.inheritAttrs });
        }
    }
}
</script>