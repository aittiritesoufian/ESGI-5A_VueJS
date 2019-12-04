<template>
    <form onSubmit={props.handleSubmit}>
        <slot></slot>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: "Formik",
    props: {
        handleSubmit: Function
    },
    methods: {
        
    }
}
</script>