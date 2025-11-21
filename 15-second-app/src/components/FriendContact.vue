<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ favorite ? 'Hide' : 'Show' }} Details</button>
    </li>
    <ul v-if="detailsVisible">
        <li><strong>Phone:</strong> {{ phone }}</li>
        <li><strong>Email:</strong> {{ email }}</li>
    </ul>
</template>

<script>
export default {
    // props: ['friend'],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        detailsAreVisible: {
            type: Boolean,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    emits: ['toggle-favorite'],
    // emits: {
    //     'toggle-favorite': (id) => {
    //         console.log('id', id);
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('Id is required');
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsVisible: this.detailsAreVisible,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        }
    }
}
</script>