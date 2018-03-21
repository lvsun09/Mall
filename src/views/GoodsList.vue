<template>
  <div>
    这是商品列表
    <span>{{$route.params.goodsId}}</span>
    <router-link to="/goods/tittle">显示商品头</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div><router-view></router-view></div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'hello vue'
    }
  }
}
</script>

<style>

</style>
