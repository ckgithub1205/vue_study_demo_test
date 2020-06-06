<template>
	<div class="tab-bar-item" @click="btnClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>
<script>
	export default {
		name:'TabBarItem',
		data(){
			return {
				// isActive:true
			}
		},
		props:{
			//自定义路由
			link:{
				type:String,
				default:'/'
			},
			//自定义激活状态背景色
			ActiveColor:{
				type:String,
				default:'red'
			}
		},
		methods:{
			btnClick(){
			
				//通过代码的方式来跳转路由
				this.$router.replace(this.link).catch((err)=>{});
			}
		},
		computed:{
			//可以给active状态下的tab自定义文字颜色
			activeStyle(){
				return this.isActive?{color:this.ActiveColor}:{}
			},
			isActive(){
				//如果当前的路由中包含指定字符串，说明当前路由是active状态
				return this.$route.path.indexOf(this.link) !== -1
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex:1;
		text-align:center;
		height:49px;
		font-size:15px;
	}
	.tab-bar-item img{
		width:30px;
		height:20px;
		margin-top: 3px;
	}
	.active{
		color:red;
	}
</style>
