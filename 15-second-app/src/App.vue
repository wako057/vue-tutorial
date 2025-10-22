<template>
    <h2>My Friends</h2>
    <ul>
        <li v-for="friend of friends" :key="friend.name">
            <h2>{{ friend.name }}</h2>
        </li>
    </ul>
</template>

<script >
export default {
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01234 5678 991",
                    email: "manuel@localhost.com",
                    detailsAreVisible: false,
                },
                {
                    id: "julie",
                    name: "Julie Jones",
                    phone: "09876 543 221",
                    email: "julie@localhost.com",
                    detailsAreVisible: false,
                }
            ]
        }
    }
}

</script>