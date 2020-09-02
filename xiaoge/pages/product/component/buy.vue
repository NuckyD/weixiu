<template>
	<view>
		<view class="buy">
			<view class="cart">
				<image src="../../../static/image/cart.png"></image>
				<text>购物车</text>
			</view>
			<view class="jiarugouwuche">
				<text>加入购物车</text>
			</view>
			<view class="lijixiadan">
				<text>立即下单</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'buy'
			
	}
</script>

<style scoped>
	.buy{
		display: flex;
		position: fixed;
		bottom: 0upx;
		height: 100upx;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.cart{
		width: 20%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.cart image{
		width: 50upx;
		height: 50upx;
	}
	.cart text{
		font-size: 25upx;
	}
	.jiarugouwuche{
		display: flex;
		align-items: center;
		height: 100upx;
		background-color: #ffaa00;
		width: 39%;
	}
	.jiarugouwuche text{
		font-size: 40upx;
		margin: 0 auto;
	}
	.lijixiadan{
		display: flex;
		align-items: center;
		height: 100upx;
		background-color: #f1911b;
		width: 39%;
	}
	.lijixiadan text{
		font-size: 40upx;
		margin: 0 auto;
	}
</style>
