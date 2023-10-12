<template>
    <Sidebar />

    <br><br><br>

    <h1>SWDA DASHBOARD</h1>

    <Footer />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer'

export default {
    name: 'SWDA',
    components: {
        Sidebar,
        Footer,
    }
    
}
</script>