<template>
    <Sidebar />

    <br><br><br>

    <h1>HR DASHBOARD</h1>
    <Footer />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer';

export default {
    name: 'HR',
    components: {
        Sidebar,
        Footer,
    }
    
}
</script>