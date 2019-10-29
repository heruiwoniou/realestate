<template>
  <div class="layout">
    <nav class="top-nav">
      <div class="top-nav__left">
        <slot name="left"></slot>
      </div>
      <div class="top-nav__center">{{title}}</div>
      <div class="top-nav__right">
        <slot name="right"></slot>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="stylus">
.layout {
  min-height: 100vh;
  background: rgba(242, 245, 250, 1);
}

.top-nav {
  height: 160px;
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;
  align-content: stretch;

  .top-nav__left, .top-nav__right {
    width: 600px;
    height: 100%;
    background: red;
  }

  .top-nav__center {
    flex: 1;
    text-align: center;
    font-size: 100px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>