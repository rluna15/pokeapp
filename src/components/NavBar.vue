<template>
    <div>
        <nav>
            <h1>PokeBuilder</h1>

            <!-- for logged in users -->
            <div>
                <router-link to="/">Home</router-link>
                <router-link to="/pokedex">Pokedex</router-link>
                <router-link to="/team-builder">Team Builder</router-link>
                <router-link to="/my-team">My Team</router-link>
                <button @click="">Logout</button>
            </div>

            <!-- for logged out users -->
            <div>
                <router-link to="/login">Login</router-link>
                <router-link to="/signup">Signup</router-link>
            </div>
        </nav>
        <!-- show user email -->
        <div>logged in as</div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    setup() {
        return {};
    },
};
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
}
nav h1 {
    margin-right: auto;
    margin-bottom: 0;
}
nav a {
    margin-left: 16px;
}
nav button {
    font-size: 15px;
    padding: 0;
    margin-left: 16px;
    border: none;
    background: none;
    color: hsla(160, 100%, 37%, 1);
}
nav button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}
nav a.router-link-exact-active {
    color: #0ec58e;
}
nav + p {
    margin-top: 0;
    margin-bottom: 30px;
}
</style>
