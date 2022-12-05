<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
    components: {
    },

}
</script>

<style>
body {
    overflow-x: clip !important;
}
.navbar-white {
    background-color: #ECECEC !important;
    color: #1f2d3d;
}

.content-wrapper {
    min-height: -webkit-fill-available !important;
    background-color: #fff !important;
}

body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .content-wrapper,
body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .content-wrapper::before,
body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-footer,
body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-footer::before,
body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-header,
body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-header::before {
    margin-left: 73px !important;
}

nav.main-header.navbar.navbar-expand.navbar-white.navbar-light {
    position: fixed;
    width: -webkit-fill-available;
}

@media screen and (max-width: 1022px) {

    body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .content-wrapper,
    body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .content-wrapper::before,
    body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-footer,
    body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-footer::before,
    body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-header,
    body.sidebar-collapse:not(.sidebar-mini-xs):not(.sidebar-mini-md):not(.sidebar-mini) .main-header::before {
        margin-left: 0px !important;
    }
}

.container-fluid {
    padding-right: 16.5px !important;
    padding-left: 16.5px !important;
}

@font-face {
  font-family: "Mulish";
  src: local("mulish_black"),
   url(./assets/fonts/Mulish-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Inter";
  src: local("inter_black"),
   url(./assets/fonts/Inter-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Nunito";
  src: local("nunito_black"),
   url(./assets/fonts/Nunito-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Poppins";
  src: local("poppins_black"),
   url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}
.router-link-exact-active {
    background: #D5E6FB !important;
    border-radius: 8.83405px !important;
}

.vue__time-picker input.vue__time-picker-input {
    border: 2px solid #d2d2d2 !important;
    width: 10em;
    height: 2.2em;
    padding: 1.4em 0.5em !important;
    font-size: 1em;
    border-radius: 4px !important;
}

</style>