export default {
    template: `
        <div class="flex gap-1 px-2 py-1">
            <button 
                v-for="tag in tags"
                    @click="$emit('update:selectedTag', tag)"
                    class="border rounded px-2 py-1 text-xs"
                    :class='{
                        "border-blue-200 text-blue-200": selectedTag == tag,
                        "border-gray-300":  selectedTag != tag
                    }'
                >
                    {{ tag }}        
             </button>       
         </div>
    `,

    props: {
      initialTags: Array,
      selectedTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]
        }
    }
}