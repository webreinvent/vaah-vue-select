import vhSelect from "./../dist/VaahVueSelect.esm.js";

export default {
    name: 'App',
    template: `
    <div class="container mx-auto p-4">
      <h1>Demo</h1>
      
      <vh-select :options="options" v-model="selected_val"
      option_value="code" 
      option_text="name"
      v-on:on-select="getSelectedValue"
      ></vh-select>
      
      Selected Value: {{selected_val}}
      
    </div>
  `,
    components:{
        'vh-select': vhSelect,
    },
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

            console.log("received value", data);

        }
    }

};