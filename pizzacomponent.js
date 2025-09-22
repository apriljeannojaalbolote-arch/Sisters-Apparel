
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            Pizza: 30,
            Burger: 50,
            totalChange: '',
            BurgerQuantity: '',
            input1: '',
            input2: '',
            PizzaQuantity: '',
            subTotal: '',
            paymentAmount: '',
            Change: '',
            balance: '',
        }
    },
    methods: {
        calculate() {
            this.PizzaQuantity = this.Pizza * this.input1;
            this.BurgerQuantity = this.Burger * this.input2
            if (this.Pizza >= 1 || this.Burger >= 1) {
                this.subTotal = this.PizzaQuantity + this.BurgerQuantity;
            };


        },
        payment() {
            this.PizzaQuantity = this.Pizza * this.input1;
            this.BurgerQuantity = this.Burger * this.input2;
            this.subTotal = this.PizzaQuantity + this.BurgerQuantity;
            if (this.paymentAmount >= this.subTotal) {
                this.Change = this.paymentAmount - this.subTotal;
            } else {
                this.balance = 'Insufficient Balance';
            }
        },
    }
});
app.component('Heading', {
    props: ['Pizza', 'Burger'],
    template: ` <p class="text-2xl font-semibold mt-5">Pizza: $30</p>
                <input v-model="$parent.input1" type="number" id="Pizza" placeholder="Enter Quantity"
                    class="border bg-white h-10 pl-5 border-black text-2xl rounded-md">
                <p class="text-2xl font-semibold mt-5">Burger: $50</p>
                <input v-model="$parent.input2" type="number" id="Burger" placeholder="Enter Quantity"
                    class="border bg-white h-10 pl-5 border-black text-2xl rounded-md">`
});
app.component('second-form', {
    props: ['Pizza', 'Burger'],
    template: `  <div>
                    
                </div>
                <div class="mt-10">
                    <h1 class="text-2xl font-semibold">{{balance}}</h1>
                </div>`
})
app.mount('#app');
