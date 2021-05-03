var visualize = Vue.component('visualize', {
    /*props: {
        list: {
            type: Array,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        boh: {
            type: String,
            required: false
        }
    },*/
    template: `
        <div>
            dassd
            <div v-for="x in groceryList">
                <h1>{{x.text}}</h1>
            </div>
            <h2>{{a}}</h2>
            <h2>{{boh}}</h2>
            <button v-on:click="updateBoh(0)">0</button>
            <button v-on:click="updateBoh(1)">1</button>
            <button v-on:click="updateBoh(2)">2</button>
        <div>
    `,
    data: function() {
        return {
            groceryList: [
                {id: 0, text: 'Vegetables'},
                {id: 1, text: 'Cheese'},
                {id: 2, text: 'Whatever'}
            ],
            a: 10,
            index: 0
        };
    },
    methods: {
        updateBoh: function(i) {
            this.index = i;
        }
    },
    computed: {
        boh: function() {
            return this.groceryList[this.index].id*10;
        }
    }
});

var app = new Vue({el: 'visualize'});