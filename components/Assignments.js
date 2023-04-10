import AssignmentsList from "./AssignmentsList.js";
import AddAssignment from "./AddAssignment.js";
export default {
    components: {AssignmentsList, AddAssignment},
    template: `
        <div class="space-y-3">
            <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>
            <add-assignment @addAssignment="add"></add-assignment>
        </div>
     `,
    data() {
        return {
            assignments: [
                {name: 'Go to bank', completed: false, id: 1},
                {name: 'Inquire for loan', completed: false, id: 2},
                {name: 'Complete the requirements', completed: false, id: 3},
            ]
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
        add(newAssignment) {
            this.assignments.push({
                name: newAssignment,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    }
}