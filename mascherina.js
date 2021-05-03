Vue.component('mascherina', {
    template: `
        <div class="product-info">
            
        </div>
    `,
    data: 
});

var app = new Vue({
    el: '#app',
    data : {
        details: [
            {text: 'dsa'},
            {text: 'asd'}
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart+=1;
        }
    },
    computed: {
        fullname: function() {
            return this.details[0].text;
        }
    }
})