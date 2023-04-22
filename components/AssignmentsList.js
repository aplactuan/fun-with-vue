import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
      Assignment,
      AssignmentTags
    },
    template: `
        <section v-show="assignments.length" class="border border-gray-400 rounded-lg w-64">
            <h2 class="font-bold p-2 border-b border-gray-400">
                {{ title }} ({{ assignments.length }})
            </h2>
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                v-model:selectedTag="selectedTag"
            >    
            </assignment-tags>
            <ul class="divide-y-2 divide-gray-400">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
            <slot />
        </section>
    `,
    data() {
      return {
          selectedTag: 'all'
      }
    },
    props: {
        title: {
            required: true,
            type: String
        },
        assignments: {
            required: true,
            type: Array
        }
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        },
        filteredAssignments() {
            if (this.selectedTag == 'all') {
                return this.assignments
            }

            return this.assignments.filter(a => a.tag == this.selectedTag)
        }
    }
}