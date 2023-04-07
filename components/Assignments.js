import AssignmentsList from "./AssignmentsList.js";
export default {
    components: {AssignmentsList},
    template: `
        <div class="space-y-3">
            <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>
            <form @submit.prevent="add" class="bg-white flex justify-between text-gray-600">
                <input type="text" placeholder="Enter task" v-model="newAssignment" class="p-1">
                <button type="submit" class="bg-gray-400 px-3">Add</button>
            </form>
        </div>
     `,
    data() {
        return {
            assignments: [
                {name: 'Go to bank', completed: false, id: 1},
                {name: 'Inquire for loan', completed: false, id: 2},
                {name: 'Complete the requirements', completed: false, id: 3},
            ],
            newAssignment: ''
        }
    },
    computed: {
        filters() {
          return {
              inProgress: this.assignments.filter(assignment => !assignment.completed),
              completed: this.assignments.filter(assignment => assignment.completed)
          }
        }
    },
    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            })

            this.newAssignment = ''
        }
    }
}