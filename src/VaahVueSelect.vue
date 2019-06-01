<script>

    export default {
        name: 'VaahVueSelect',
        props:{
            options:{
                type: Array,
                default: null,
            },
            value:{
                default: null
            },
            option_value:{
                type: String,
                default: null
            },
            option_text:{
                type: String,
                default: null
            },
            default_text:{
                type: String,
                default: "Select Option"
            },
            select_class:{
                type: String,
                default: "form-control"
            }
        },
        data () {

            let obj = {

                vh_options: this.options,
                vh_selected: this.value,
                vh_option_value: this.option_value,
                vh_option_text: this.option_text,
                vh_default_text: this.default_text,
                vh_class: this.select_class,

            };

            return obj
        },
        created () {
            this.setToStrings()
        },
        methods: {
            setToStrings () {
                // Simply replaces null values with strings=''
                if (this.vh_selected === null) {
                    this.vh_selected = ''
                }
                return this.vh_selected;
            },
            sendSelectedValue: function () {
                this.$emit('change', this.vh_selected);
            },
        }

    }
</script>

<template>
    <div class="vaah-vue-select" v-if="vh_options">

        <select v-model="vh_selected" v-bind:value="vh_selected" :input="sendSelectedValue()"
                :change="sendSelectedValue()"
                :class="vh_class" >

            <option disabled value="" >{{vh_default_text}}</option>

            <option v-if="vh_option_value" v-for="option in vh_options"
                    :value="option[vh_option_value]">{{option[vh_option_text]}}</option>

            <option v-else v-for="option in vh_options" >{{option}}</option>
        </select>

    </div>
</template>

