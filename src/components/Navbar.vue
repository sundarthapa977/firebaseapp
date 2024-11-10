<template>
    <nav class="navbar navbar-expand-lg navbar-custom">
        <span class="navbar-brand">Subscriptions</span>
        <ul class="nav justify-content-center">
            <li class="nav-item" v-if="loggedIn === 'false'">
                <a class="nav-link" @click="register">Register</a>
            </li>
            <li class="nav-item" v-if="loggedIn === 'true'">
                <a class="nav-link" @click="logout">Logout</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    name: 'Navbar',
    data() {
        return {
            loggedIn: 'false',
        };
    },
    created() {
        this.checkLoginStatus();
    },
    methods: {
        checkLoginStatus() {
            this.loggedIn = firebase.auth().currentUser ? 'true' : 'false';
        },
        logout() {
            firebase.auth().signOut()
                .then(() => {
                    this.loggedIn = 'false';
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
        register() {
            this.$router.push('/register');
        }
    },
    watch: {
        '$route': 'checkLoginStatus'
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
}

.navbar-custom {
    background-color: #44515e;
    padding: 1em 2em;
    border-radius: 8px;
}

.navbar-brand {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.5em;
    letter-spacing: 0.5px;
}

.nav {
    list-style-type: none;
}

.nav-link {
    color: #d9e3f0;
    padding: 0.5em 1em;
    margin: 0 0.5em;
    font-size: 1.1em;
    transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 5px;
}

.nav-link:hover {
    color: #ffffff;
    background-color: #2d3b45;
}

.nav-item.active .nav-link {
    color: #42B883;
}

.nav-item .router-link-exact-active {
    color: #08492c;
}
</style>
