<template>

    <div class="container" data-layout="container">
        <DashboardSideNav />           

  <div class="content">
        <DashboardTopNav />     
        <Nuxt />          
        <DashbordFooter />  
        </div>
    </div>
</template>

<script>

//  var navbarPosition = localStorage.getItem('navbarPosition');
//             var navbarVertical = document.querySelector('.navbar-vertical');
//             var navbarTopVertical = document.querySelector('.content .navbar-top');
//             var navbarTop = document.querySelector('[data-layout] .navbar-top');
//             var navbarTopCombo = document.querySelector('.content [data-navbar-top="combo"]');
//             if (navbarPosition === 'top') {
//               navbarTop.removeAttribute('style');
//               navbarTopVertical.remove(navbarTopVertical);
//               navbarVertical.remove(navbarVertical);
//               navbarTopCombo.remove(navbarTopCombo);
//             } else if (navbarPosition === 'combo') {
//               navbarVertical.removeAttribute('style');
//               navbarTopCombo.removeAttribute('style');
//               navbarTop.remove(navbarTop);
//               navbarTopVertical.remove(navbarTopVertical);
//             } else {
//               navbarVertical.removeAttribute('style');
//               navbarTopVertical.removeAttribute('style');
//               navbarTop.remove(navbarTop);
//               navbarTopCombo.remove(navbarTopCombo);
//             }

export default {

}
</script>

<style>

</style>
