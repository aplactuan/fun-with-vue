import AssignmentsList from "./AssignmentsList.js";
import AddAssignment from "./AddAssignment.js";
export default {
    components: {AssignmentsList, AddAssignment},
    template: `
        <div class="flex gap-6">
            <assignments-list :assignments="filters.inProgress" title="In Progress">
                <add-assignment @addAssignment="add"></add-assignment>
            </assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed"></assignments-list>
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