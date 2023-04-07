import Assignment from "./Assignment.js";

export default {
    components: {
      Assignment
    },
    template: `
        <section v-show="assignments.length" class="border border-gray-400 rounded-lg">
            <h2 class="font-bold p-2 border-b border-gray-400">{{ title }}</h2>
            <ul class="divide-y-2 divide-gray-400">
                <assignment
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,
    props: {
        title: {
            required: true,
            type: String
        },
        assignments: {
            required: true,
            type: Array
        }
    }
}