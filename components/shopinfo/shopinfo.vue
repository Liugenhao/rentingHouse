<template>
  <view class="collapse-content">
    <view class="content-item">
      <text class="text-black">商铺名称：</text>
      <text class="text-gray">测试商铺</text>
    </view>
    <view class="content-item">
      <text class="text-black">商铺编号：</text>
      <text class="text-gray">026645</text>
    </view>
    <view class="content-item">
      <text class="text-black">商铺地址：</text>
      <text class="text-gray">浙江省嘉兴市</text>
    </view>
    <view class="content-item">
      <text class="text-black">房&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;东：</text>
      <text class="text-gray">Test Name</text>
    </view>
  </view>
</template>

<script>
  export default {
    name:"shopinfo",
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.content-item{
  padding: 0 20rpx;
  height: 80rpx;
  line-height: 80rpx;
  border-bottom: 1px solid #F5F5F5;
  &:last-child{
    border-bottom: none;
  }
}
</style>
