<template>
    <form onSubmit={props.handleSubmit}>
        <fieldset
            v-for="field in fields"
            v-bind:key="field.id">
            <input
                v-if="field.type != 'select' && field.type != 'checkbox' && field.type != 'radio'"
                :type="field.type"
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :value="field.value"
                :disabled="field.disable === choice.id">
        </fieldset>
        <input
        type="text"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.name}
        name="name"
        />
        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
        <button type="submit">Submit</button>
    </form>
</template>

<script>
export default {
    name: "Formik",
    props: {
        action: String,
        method: String,
        //fields: Object,
        handleSubmit: Function
    },
    data: () => ({
        plop: "plop",
        fields: {
            "name": {
                type: "text",
                name: "name",
                id: "id",
                label: "Saisissez votre nom",
                placeholder: "Saisissez votre nom",
                disable: false,
                value:""
            },
            "my_list": {
                type: "select",
                id: "choice",
                name: "choice",
                label: "Faites un choix",
                placeholder: "Faites un choix",
                disable: false,
                options: [
                    {
                        value: "choice1",
                        label: "Premier Choix !"
                    },
                    {
                        value: "choice2",
                        label: "Second Choix !",
                        selected:true,
                    }
                ]
            },
            "consent": {
                type: "checkbox",
                id: "consent",
                name: "consent",
                placeholder: "Vous consentez à ceci",
                disable: false,
                value: 0
            },
            "consent2": {
                type: "checkbox",
                id: "consent2",
                name: "consent2",
                label: "Vous consentez à cela",
                disable: false,
                value: 1
            },
            "uniquechoice": {
                type: "radio",
                id: "uniquechoice",
                name: "uniquechoice",
                label: "Faite un choix",
                options: [
                    {
                        value: "premier_choix",
                        label: "Premier Choix !"
                    },
                    {
                        value: "second_choix",
                        label: "Second Choix !",
                        selected:true,
                    }
                ]
            }
        }
    }),
}
</script>