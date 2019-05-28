<script>

    export default {
        name: 'VaahVueSelect',
        props:{
            options:{
                type: Array,
                default() {
                    return []
                },
            },
            value:{
                default: ""
            },
            classes:{
                default: "form-control"
            },
            option_key:{
                default: 'id'
            },
            option_value:{
                default: 'name'
            },
            default_text: {
                default: "Select Option"
            }
        },
        data () {

            let obj = {

            };

            return obj
        }

    }
</script>

<template>
    <div class="vaah-vue-select" v-if="options">

        <select v-model="value" v-bind:class="classes">

            <option value="">{{default_text}}</option>
            <option v-for="option in options" v-bind:value="option[option_key]">{{option[option_value]}}</option>

        </select>

    </div>
</template>

