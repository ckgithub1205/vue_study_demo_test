<template>

    <tab-bar>
		<tab-bar-item :ActiveColor="'red'" link="/home">
			<img src="~assets/img/tabbar/home.png" alt="首页" slot="item-icon">
			<img src="~assets/img/tabbar/home-active.png" alt="首页" slot="item-icon-active">
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item :ActiveColor="'red'" :link="'/category'">
			<img src="~assets/img/tabbar/category.png" alt="分类" slot="item-icon">
			<img src="~assets/img/tabbar/category-active.png" alt="首页" slot="item-icon-active">
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item :ActiveColor="'red'" :link="'/cart'">
			<img src="~assets/img/tabbar/cart.png" alt="购物车" slot="item-icon">
			<img src="~assets/img/tabbar/cart-active.png" alt="首页" slot="item-icon-active">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item :ActiveColor="'red'" :link="'/profile'">
			<img src="~assets/img/tabbar/Profile.png" alt="我的" slot="item-icon">
			<img src="~assets/img/tabbar/Profile-active.png" alt="首页" slot="item-icon-active">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>

</template>

<script>
	
	import TabBar from 'components/common/tabbar/TabBar';
	import TabBarItem from 'components/common/tabbar/TabBarItem'
	
	export default {
		
		name:'App',
		components:{
			
			TabBar,
			TabBarItem
		}
			
	}
	
</script>

<style>
	
</style>
