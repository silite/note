<template>
  <div>
    <h1>Account组件</h1>

    <router-link to="/account/login">登陆</router-link>
    <router-link to="/account/register">注册</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>
  body {
    div {
      font-style: italic;
    }
  }
</style>