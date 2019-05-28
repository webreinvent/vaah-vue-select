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

```sh
<vh-select :value="" :options="[]" :classes="'form-control'" 
:option_key="'array_key'" :option_value="'array_value'"
:default_text="'Select option'"
 ></vh-select>
```

Example 1:
```js
let options = [
    {
        country_code: 'IN',
        country_name: 'India',
    },
    {
        country_code: 'US',
        country_name: 'United States',
    }
];

let selected_value = "IN";

```

To create a select dropdown we'll pass the following value:
```sh
<vh-select :value="selected_value" :options="options" :option_key="'country_code'" :option_value="'country_name'" :default_text="'Select Country'"></vh-select>
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
```sh
<vh-select :value="selected_id" :options="options" :default_text="'Select Country'"></vh-select>
```

## Support us

[WebReinvent](https://www.webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

#### Credits:
- To generate vue npm package 
https://github.com/team-innovation/vue-sfc-rollup