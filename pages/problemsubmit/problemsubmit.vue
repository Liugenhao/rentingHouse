<template>
  <view class="container">
    <view>
      <uni-forms ref="form" :rules="rules" :modelValue="formData"label-position="left">
        <uni-forms-item label="商铺名称" name="shopname" required>
          <uni-easyinput type="text" v-model="formData.shopname" placeholder="请输入商铺名称" />
        </uni-forms-item>
        <uni-forms-item label="商铺编号" name="shopid" required>
          <uni-easyinput type="text" v-model="formData.shopid" placeholder="请输入商铺编号" />
        </uni-forms-item>
        <uni-forms-item label="商铺地址" name="shopardess" required>
          <uni-easyinput type="text" v-model="formData.shopardess" placeholder="请输入商铺地址" />
        </uni-forms-item>
        <uni-forms-item label="房东姓名" name="landlord" required>
          <uni-easyinput type="text" v-model="formData.landlord" placeholder="请输入房东姓名" />
        </uni-forms-item>
        <uni-forms-item label="问题类型" name="type" required>
          <uni-combox 
            placeholder="请选择问题类型" 
            :candidates="candidates" 
            emptyTips="这里啥也没有"
            v-model="formData.type">
          </uni-combox>
        </uni-forms-item>
        <uni-forms-item label="问题描述" name="desc" required>
          <uni-easyinput type="textarea" v-model="formData.desc" placeholder="请输入问题描述"></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item label="巡检人员" name="cxry" required>
          <uni-easyinput type="text" v-model="formData.cxry" placeholder="请输入巡检人员" />
        </uni-forms-item>
        <uni-forms-item label="上报时间" name="time" required>
          <uni-datetime-picker v-model="formData.time" />
        </uni-forms-item>
        <uni-forms-item label="问题图片" name="img" required>
          <uni-file-picker 
          	v-model="formData.img" 
          	fileMediatype="image" 
            file-extname="jpg,png"
          	mode="grid" 
            :limit="3"
          	@select="select" 
          	@progress="progress" 
          	@success="success" 
          	@fail="fail" />
        </uni-forms-item>
      </uni-forms>
      <uni-button type="primary" @click="submitForm">提交问题</uni-button>
    </view>
  </view>
</template>
<script>
  import rules from "./rules.js"
  export default {
    data() {
      return {
        candidates:["物业","司法","行政"],
        formData:{
          shopname:"",
          shopid:"",
          shopardess:"",
          landlord:"",
          type:"",
          desc:"",
          cxry:"",
          time:"",
          img:[],
        },
        rules:rules
      };
    },
    methods:{
      //表单提交
      submitForm () {
        this.$refs.form.validate().then(res=>{
          console.log('表单数据信息：', res);
        }).catch(err =>{
          console.log('表单错误信息：', err);
        })
        console.log(this.formData)
      },
      // 获取上传状态
      select(e){
        console.log('选择文件：',e)
      },
      // 获取上传进度
      progress(e){
        console.log('上传进度：',e)
      },
      // 上传成功
      success(e){
        console.log('上传成功')
      },
      // 上传失败
      fail(e){
        console.log('上传失败：',e)
      },
    }
  }
</script>

<style lang="scss">

</style>
