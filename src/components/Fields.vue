<template>
    <fieldset>
        <label
            v-if="field.type != 'select' && field.type != 'radio' && field.type != 'textarea'"
            :for="field.id">{{ field.label }}
            <input
                :type="field.type"
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :value="field.value"
                :disabled="field.disable == true"
                :checked="field.value == 1 && field.type == 'checkbox'" />
        </label>
        <div
            v-if="field.type == 'radio'"
            :for="field.id">
            <label>{{ field.label }} : </label>
            <label
                v-for="option in field.options"
                v-bind:key="option.value">{{ option.label }}
            <input
                
                :type="field.type"
                :name="field.name"
                :value="option.value"
                :checked="option.checked == 1" />
                </label>
        </div>
        <label
            v-if="field.type == 'textarea'"
            :for="field.id">{{ field.label }}
            <textarea
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :disabled="field.disable == true"
                v-model="field.value"></textarea>
        </label>
        <label
            v-if="field.type == 'select'"
            :for="field.id">{{ field.label }}
            <select
                :name="field.name"
                :id="field.id"
                :placeholder="field.placeholder"
                :disabled="field.disable == true">
                <option
                    v-for="option in field.options"
                    v-bind:key="option.value"
                    :value="option.value">
                    {{ option.label }}
                </option>
            </select>
        </label>
    </fieldset>
</template>

<script>
export default {
    name: 'field',
    props:{
        field: Object
    }
}
</script>