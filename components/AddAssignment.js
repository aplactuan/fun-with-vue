export default {
    template: `
        <form @submit.prevent="add" class="bg-white flex justify-between text-gray-600">
            <input type="text" placeholder="Enter task" v-model="newAssignment" class="p-1">
            <button type="submit" class="bg-gray-400 px-3">Add</button>        
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('addAssignment', this.newAssignment)
            this.newAssignment = ''
        }
    }
}