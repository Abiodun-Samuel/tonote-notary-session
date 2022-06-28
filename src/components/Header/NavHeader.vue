<template>
   <!-- <div>
      <nav class="navbar navbar-expand-lg bg-white">
         <div class="container">
            <span>
               <Icon icon="bx:home" height="25" width="25" />
            </span>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-flex justify-content-between align-items-center" id="navbarSupportedContent">

               <router-link class="navbar-brand" to="/">
                  <img class="logo" src="../../assets/images/logo.png" alt="logo">
               </router-link>

               <div :class="$route.path == '/video' ? 'hidden__two' : ''">
                  <button class="btn btn-primary mx-1" disabled>Cancel</button>
                  <button class="btn btn-primary mx-1">Complete</button>
               </div>
            </div>
         </div>
      </nav>
   </div> -->

   <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
         <a class="navbar-brand" href="#">
            <Icon icon="bx:home" height="25" width="25" />
         </a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li>
                        <hr class="dropdown-divider">
                     </li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
               </li>
               <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
   name: "NavHeader",
   components: {
      Icon
   }
}
</script>

<style>

.navbar{
   box-shadow: var(--bs-box-shadow);
}
.navbar .logo{
   height: 25px;
   width: auto;
   object-fit: contain;
}
.hidden__two {
   visibility: hidden;
}
button[disabled],button:disabled{
   background: red;
}
</style>