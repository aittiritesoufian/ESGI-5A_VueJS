<template>
    <div>
    <h1>{{ name }}</h1>
    <form
      @submit.prevent="handleSubmit"
      :action="action"
    >
      <Field
        v-for="field in fields"
        :key="field.id"
        :list="field"
        ></Field>
    </form>
  </div>
</template>

<script>
export default {
    name: "Formik",
    props: {
        fields: Object,
        action: String
    },
    data: () => ({
        
    }),
    methods: {
        handleSubmit: () => {
            this.$emit('formik-submit', { fields });
        }
    },
}
</script>

<style scoped>

</style>