<template>
  <view class="collapse-content">
    <view class="content-item">
      <text class="text-black">问题类别：</text>
      <text class="text-gray">物业</text>
    </view>
    <view class="content-item">
      <text class="text-black">问题描述：</text>
      <text class="text-gray">浙江省嘉兴市</text>
    </view>
    <view class="content-item">
      <text class="text-black">巡查人员：</text>
      <text class="text-gray">Test Name</text>
    </view>
    <view class="content-item">
      <text class="text-black">上报时间：</text>
      <text class="text-gray">20220304</text>
    </view>
    <view class="content-item wtimg-wrapper">
      <text class="text-black">问题图片：</text>
      <image src="@/static/img/pro_bg.jpg" mode="heightFix" style="height: 120rpx;"></image>
    </view>
  </view>
</template>

<script>
  export default {
    name:"problem",
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
  .collapse-content{
    .wtimg-wrapper {
      display: flex;
      height: 180rpx;
      align-items: center;
    }
  }
  
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
