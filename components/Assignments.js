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
            assignments: []
        }
    },

   created() {
     fetch('http://localhost:3001/assignments')
         .then(response => response.json())
         .then(assignments => this.assignments = assignments)
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