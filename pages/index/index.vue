<template>
	<view class="container">
    <view class="content">
      <view
        class="text-area" 
        v-for="(item,index) in navLists" 
        :key="index">
      	<text 
          class="text-blue" 
          @click="navigateTo(item.url)">
          {{item.text}}
        </text>
      </view>
    </view>
	</view>
</template>

<script>
  var util = require('../../common/util.js');  //require这个js模块
  var formatedPlayTime = util.formatTime("2022-03-04"); //调用js模块的方法 
  
  import navList from './nav.js'
	export default {
		data() {
			return {
        time:formatedPlayTime,
        navLists:navList
			}
		},
		onLoad() {

		},
		methods: {
      navigateTo (url) {
        uni.navigateTo({
          url:url
        })
      }
      
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
    justify-content: space-around;
	}
	.text-area {
    flex:0 0 50%;
    line-height: 80rpx;
	}
</style>
