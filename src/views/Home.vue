<template>
  <div class="home">
    <nav class="main-nav">
      <ul>
        <li class="nav-item nav-drinks">
          <router-link to="drinks"></router-link>
        </li>
        <li class="nav-item nav-information">
          <router-link to="information"></router-link>
        </li>
        <li class="nav-item nav-prospectus">
          <router-link to="prospectus"></router-link>
        </li>
        <li class="nav-item nav-call">
          <a href="javascript:;"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="stylus">
.home {
  background: url('~@/assets/background.png') no-repeat;
  background-size: cover;
  background-position: left top;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1032px;
}

.main-nav {
  height: 1032px;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.nav-item {
  width: 650px;
  height: 1032px;

  a {
    display: block;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: left top;
  }

  &.nav-drinks a {
    background-image: url('~@/assets/drinks-nav.png');
  }

  &.nav-information a {
    background-image: url('~@/assets/information-nav.png');
  }

  &.nav-prospectus a {
    background-image: url('~@/assets/prospectus-nav.png');
  }

  &.nav-call a {
    background-image: url('~@/assets/call-nav.png');
  }
}
</style>