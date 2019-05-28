# vaah-vue-select

> A simple native Vue.js component for Select html tag

Please consider starring the project to show your :heart: and support.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm i vaah-vue-select
```

Register the component

```sh
import Vue from 'vue'
import vhSelect from 'vaah-vue-select'

Vue.component('vh-select', vhSelect)
```

You can pass following properties to the vue components:

```html
<vh-select v-model="selected_value" :options="[]" select_class="form-control" option_value="" option_text="" 
default_text="Select option" v-on:on-select="callBackMethod"></vh-select>
```

Explanation
- `v-model`: It is the selected value
- `:options`: An array of values to render options of the select tag
- `select_class`: Class attribute value of the select tag
- `option_key`: Key name of the array which will set the `value` attribute of the option
- `option_text`: Key name of the array which will set the text of the option
- `on-select`: You can listen to this event and call back your method which will have the selected value

Example 1:
```js
...

data()
    {
        let obj = {
            //options: ['IN', 'US'],
            options: [
                {
                    code: "IN",
                    name: "India",
                },
                {
                    code: "US",
                    name: "United States",
                }
            ],
            selected_val: 'US',
        };

        return obj;
    },
    methods: {
        getSelectedValue: function (data) {

            console.log("emitted value", data);

        }
    }
    
...

```

To create a select dropdown we'll pass the following value:
```html
<vh-select :value="selected_value" :options="options" option_key="code" option_value="name" 
default_text="Select Country" v-on:on-select="getSelectedValue"></vh-select>
```

Example 2:
```js
let options = [
    {
        id: 1,
        name: 'India',
    },
    {
        id: 2,
        name: 'United States',
    }
];

let selected_id = 1;

```

To create a select dropdown we'll pass the following value:
```html
<vh-select :value="selected_id" :options="options" option_value="id" option_text="name" 
default_text="Select Country"></vh-select>
```

Example 2:
```js
let options = ["Apple", "Orange"];

let selected = "Orange";

```

To create a select dropdown we'll pass the following value:
```html
<vh-select :value="selected" :options="options" default_text="Select Fruit"></vh-select>
```

## Support us

[WebReinvent](https://www.webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

#### Credits:
- To generate vue npm package 
https://github.com/team-innovation/vue-sfc-rollup