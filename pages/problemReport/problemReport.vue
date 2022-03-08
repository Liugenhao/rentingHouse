<template>
  <view>
    <view>
      <uni-collapse>
        <uni-collapse-item 
          class="collapse-item"
          title="商铺信息" 
          :open="true"
          thumb="../../static/icon/shop.png">
            <shopinfo></shopinfo>
        </uni-collapse-item>
      	<uni-collapse-item 
          title="问题内容" 
          :open="true"
          thumb="../../static/icon/wt.png">
            <problem></problem>
      	</uni-collapse-item>
      </uni-collapse>
      <view class="btn-wrapper">
        <button type="primary">接收处理</button>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    name:"problemReport",
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">

    .collapse-content{
      padding: 30rpx;
      
    }
    .btn-wrapper {
      padding:30rpx;
    }

</style>
