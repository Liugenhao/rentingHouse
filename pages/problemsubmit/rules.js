export default {
  shopname:{
     rules:[{
      required: true,
      errorMessage: '请输入商铺名称',
    }]
  },
  shopid:{
    rules:[{
      required: true,
      errorMessage: '请输入商铺编号',
    },{
      length: 6,
      errorMessage: '商铺编号长度必须是{length}个字符',
    }],
  },
  shopardess:{
    rules:[{
      required: true,
      errorMessage: '请输入商铺地址',
    },{
      minLength:6,
      maxLength:30,
      errorMessage:'商铺地址长度在{minLength}到{maxLength}个字符'
    }]
  },
  landlord:{
    rules:[{
      required: true,
      errorMessage: '请输入房东姓名',
    },{
      minLength:6,
      maxLength:12,
      errorMessage:'房东姓名长度在{minLength}到{maxLength}个字符'
    }]
  },
  type:{
    rules:[{
      required: true,
      errorMessage: '请选择问题类型',
    }]
  },
  img:{
    rules:[{
      required: true,
      errorMessage: '请上传问题图片',
    }]
  },
  desc:{
    rules:[{
      required: true,
      errorMessage: '请填写问题描述',
    },{
      minLength:6,
      maxLength:50,
      errorMessage:'房东姓名长度在{minLength}到{maxLength}个字符'
    }]
  },
  cxry:{
    rules:[{
      required: true,
      errorMessage: '请填写巡查人员',
    },{
      minLength:3,
      maxLength:6,
      errorMessage:'巡查人员长度在{minLength}到{maxLength}个字符'
    }]
  },
  time:{
    rules:[{
      required: true,
      errorMessage: '请填写上报时间',
    }]
  }
}