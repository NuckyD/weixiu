<template>
	<view>
		<view class="lianxi">
			<view class="lianxi-view">
				<text>联系客服</text>
				<image src="../../../static/image/phone.png"></image>
			</view>
		</view>
		<view class="phone">
			<text>400-22223333</text>
		</view>
	</view>
</template>

<script>
	export default{
		name:'lianxi'
	}
</script>

<style scoped>
	.lianxi{
		display: flex;
		height: 90upx;
		border-radius: 30upx;
		border: 1upx solid #f15000;
		margin: 30upx 20upx;
	}
	.lianxi-view{
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.lianxi text{
		font-size: 30upx;
		color: #f15000;
	}
	.lianxi image{
		width: 35upx;
		height: 35upx;
		padding-left: 20upx;
	}
	.phone{
		display: flex;
		align-items: center;
	}
	.phone text{
		font-size: 40upx;
		margin: 30upx auto;
	}
</style>
