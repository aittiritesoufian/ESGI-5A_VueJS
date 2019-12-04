<template>
    <Modal :open="open" :onClose="onCancel" title="New Card" >
        <Formik :handleSubmit="handleSubmit">
            <Fields
                v-for="field in fields"
                v-bind:key="field.id"
                :field="field"></Fields>
        </Formik>
        <div class="grid-row">
            <label for="title">Title :</label>
            <input id="title" v-model="name"/>
        </div>
        <div class="grid-row">
            <label for="description">Description :</label>
            <input id="description" v-model="description"/>
        </div>
        <div class="grid-row">
            <label for="velocity">Velocity :</label>
            <input id="velocity" v-model="velocity"/>
        </div>
        <div class="grid-row">
            <RadioGroup
                v-model="status"
                name="status"
                label="Status"
                :choices="[{id:'new', text:'Text'},{id:'done', text:'Done'}]"
            />
        </div>
        <template slot="footer">
            <a v-on:click.prevent="handleSubmit">Submit</a>
        </template>
    </Modal>
</template>

<script>
import Modal from './Modal';
import RadioGroup from './RadioGroup';
import Formik from './Formik';
import Fields from './Fields';

export default {
    name: "NewCard",
    components: {
        Modal,
        Formik,
        Fields,
        RadioGroup
    },
    data: () => ({
        name: "plip",
        description: "plop",
        velocity: 0,
        status: "done",
        fields: [
            {
                type: "text",
                name: "title",
                id: "title",
                label: "Title",
                placeholder: "Title",
                disable: false,
                value:"plop"
            },
            {
                type: "text",
                name: "description",
                id: "description",
                label: "Description",
                placeholder: "Description",
                disable: false,
                value:"desc"
            },
            {
                type: "number",
                name: "velocity",
                id: "velocity",
                label: "Vélocité",
                placeholder: "Vélocité",
                disable: false,
                value:"desc"
            },
            /*{
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
            {
                type: "checkbox",
                id: "consent",
                name: "consent",
                placeholder: "Vous consentez à ceci",
                disable: false,
                value: 0
            },
            {
                type: "checkbox",
                id: "consent2",
                name: "consent2",
                label: "Vous consentez à cela",
                disable: false,
                value: 1
            },*/
            {
                type: "radio",
                id: "status",
                name: "status",
                label: "Statut",
                placeholder: "Statut",
                disable: false,
                options: [
                    {
                        value: "text",
                        label: "Text"
                    },
                    {
                        value: "done",
                        label: "Done",
                        checked:true,
                    }
                ]
            }
        ]
    }),
    props: {
        onCancel: Function,
        open: Boolean
    },
    methods: {
        handleSubmit: function(){
            this.$emit('new-card', { ...this.$data });
        }
    },
}
</script>

<style scoped>
    .grid-row{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>