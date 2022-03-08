<template>
  <view class="">
    <view>
      <uni-segmented-control 
        :current="current" 
        :values="items" 
        @clickItem="onClickItem" 
        styleType="text" 
        activeColor="#2979ff">
      </uni-segmented-control>
      <view class="content">
        <view v-show="current === 0">
            <view class="container">
              <uni-list>
              	<uni-list-item 
                  title="列表文字" 
                  note="列表描述信息"
                  :show-badge="true" 
                  rightText="右侧文字">
                </uni-list-item>
              </uni-list>
            </view>
        </view>
        <view v-show="current === 1">
          <view class="container">已读内容</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        items: ['未读', '已读'],
        current: 0
      };
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex;
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
