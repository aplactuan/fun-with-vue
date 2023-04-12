import Assignment from "./Assignment.js";

export default {
    components: {
      Assignment
    },
    template: `
        <section v-show="assignments.length" class="border border-gray-400 rounded-lg">
            <h2 class="font-bold p-2 border-b border-gray-400">
                {{ title }} ({{ assignments.length }})
            </h2>
            <div class="flex gap-1 px-2 py-1">
                <button 
                    v-for="tag in tags"
                    @click="selectedTag = tag"
                    class="border rounded px-2 py-1 text-xs"
                    :class='{
                        "border-blue-200 text-blue-200": selectedTag == tag,
                        "border-gray-300":  selectedTag != tag
                    }'
                >
                    {{ tag }}
                </button>
            </div>
            
            <ul class="divide-y-2 divide-gray-400">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
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