<template>
  <main>
    <nav>
      navigation
      <!-- <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/generator">Generator</router-link>
        </li>
      </ul> -->
    </nav>
    <container>
      <RouterView />
    </container>
  </main>
</template>

<script>

</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
html {
  font-family: "Roboto", sans-serif;
}

main{
  display: flex;
  height: 100vh
}
nav{
  background-color: #1F81B9;
  color: #fff;
  width:250px;
  padding: 15px;

}
main > container{
  width: 100%;
}
</style>
