
const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            name: '',
            email: '',
            address: '',

            name2: '',
            email2: '',
            address2: '',
        }
    },
    methods:{
        transfer(){
            this.name2 = this.name
            this.email2 = this.email
            this.address2 = this.address
        }
    }
})
app.component('Heading', {
    props: ['name', 'email', 'address'],
    template: ` <div class="mt-10">
                    <div class="flex justify-center m-3">
                        <h1 class="text-2xl font-semibold">fill up form</h1>
                    </div>
                    <div>
                        <input v-model="$parent.name" type="text" placeholder="Enter your name"
                            class="border w-90 h-10 m-3 p-3 rounded-md">
                    </div>
                    <div>
                        <div>
                            <input v-model="$parent.email" type="text" placeholder="Enter your email"
                                class="border w-90 h-10 m-3 p-3 rounded-md">
                        </div>
                    </div>
                    <div>
                        <div>
                            <input v-model="$parent.address" type="text" placeholder="Enter your address"
                                class="border w-90 h-10 m-3 p-3 rounded-md">
                        </div>
                    </div>
                </div>`

}),
    app.component('second-form', {
        props: ['name2', 'email2', 'address2'],
        template: ` <div class="shadow-lg bg-gray-100 w-80 h-50">
                    <div class="mx-5 mt-5">
                        <h1 class="mt-5">name: <span>{{name2}}</span></h1>
                        <h1 class="mt-5">email: <span>{{email2}}</span></h1>
                        <h1 class="mt-5">address: <span>{{address2}}</span></h1>
                    </div>
                </div>`
 }),
app.mount('#app');
