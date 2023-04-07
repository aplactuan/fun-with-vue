export default {
    template: `
        <li class="p-2">
            <label class="flex items-center justify-between">
                <span class="mr-3">{{ assignment.name}}</span>
                <input type="checkbox" v-model="assignment.completed">
             </label>            
        </li>
    `,

    props: {
        assignment: {
            type: Object,
            required: true
        }
    }
}