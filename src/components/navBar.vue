<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
            <a class="navbar-brand" href='#'>OuterSpace</a>
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link" exact to='/'>Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class='nav-link' to='/exhibit'>exhibit</router-link>
            </li>
        </ul>
        <font-awesome-icon :icon="['fas','shopping-cart']"/>
        <button class='item-counter btn btn-main mb-3'>3</button>
        </div>
      
    </nav>
</div>
</template>

<script>
    export default {
     
    }
</script>

<style scoped>

.item-counter{
    color: white;
    background-color: #3268af;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    padding: 0
    
}

.item-counter:hover{
    background-color: #2c3e50;
    color: white;
}

</style>