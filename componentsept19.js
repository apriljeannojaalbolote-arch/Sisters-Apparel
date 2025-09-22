
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            students: [
                "Jim",
                "Bern",
                "Ben",
                "crismer",
                "aivegen",
                "april",
                "rosemae",
            ],
            selected: [],
            transferNewItem: [],
            newNames: '',
            title: "Geo's Chicken"
        }
    },
})
app.component('Heading', {
    props: ['title',],
    data() {
        return {
            students: [
                "Jim",
                "Bern",
                "Ben",
                "crismer",
                "aivegen",
                "april",
                "rosemae",
            ],
            selected: [],
            transferNewItem: [],
            newNames: '',
        }
    },

    template: `
          <div class="w-100 h-90 bg-gray-300 shadow-lg p-3 rounded-md">
                <h1 class="flex justify-center mt-3 font-semibold">{{title}}</h1>
                <div v-for="(student, index) in students" class="flex cursor-pointer">
                    <input v-model="selected" type="checkbox" class="cursor-pointer" :value="student">
                    <p :class="{'line-through text-gray-500': selected.includes(student)}">{{index + 1}}. {{student}}
                    </p>
                </div>

                <div class="flex p-2 gap-3 mt-4">
                    <div>
                        <label for="name"></label>
                        <input v-model="newNames" type="text" name="name" id="name" placeholder="Enter new Student"
                            class="w-50 h-7 border bg-gray-100 cursor-pointer">
                    </div>
                    <div>
                        <label for="name"></label>
                        <button @click="addNames" type="text" name="name" id="name"
                            class="w-30 h-8 border rounded-md cursor-pointer">Add students</button>
                    </div>
                </div>

                <div>
                    <button @click="transferTheItem"
                        class="shadow-lg text-center bg-gray-400 cursor-pointer w-90 h-9 p-3 rounded-md mt-8">Add
                    </button>
                </div>

            </div>
             <div class="mt-15">
                <div class="shadow-lg w-80 h-30 bg-blue-100 rounded-md p-3">{{transferNewItem.toString()}}</div>
            </div>`,
    methods: {
        transferTheItem() {
            this.transferNewItem.push(this.selected);
            console.log(this.transferNewItem)
        },
        addNames() {
            if (this.newNames !== '') {
                this.students.push(this.newNames);
                this.newNames = '';
            }
        }
    }
}),
    app.mount('#app');
