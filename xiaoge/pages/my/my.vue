<template>
	<view>
		<view class="geren">
			<view class="userInfo">
				<view class="userInfo-image">
					<image src="../../static/image/my.png" class="profile-photo"></image>
				</view>
				<view class="userInfo-text">
					<text class="nickname">**炜</text>
					<text class="mobile-phone">132****7858</text>
				</view>
			</view>
		</view>
		<view class="orderInfo">
			<block v-for="(item,index) in orderType" :key="index">
				<view class="order-type">
					<image :src="item.image"></image>
					<text>{{item.type}}</text>
				</view>
			</block>
		</view>
		<view>
			<block v-for="(item,index) in options" :key="index">
				<view class="options">
					<view class="options-v1">
						<image :src="item.image"></image>
						<text class="options-name">{{item.name}}</text>
					</view>
					<view class="options-v2"> 
						<text class="options-i">></text>
					</view>
				</view>
			</block>
		</view>
		<view style="height: 300upx;"></view>
	</view>
</template>

<script>
	export default{
		components:{
		},
		data(){
			return{
				orderType:[{
						image:'../../static/image/order.png',
						type:'待支付'
					},
					{
						image:'../../static/image/order.png',
						type:'待接单'
					},
					{
						image:'../../static/image/order.png',
						type:'服务中'
					},
					{
						image:'../../static/image/order.png',
						type:'待确认'
					},
					{
						image:'../../static/image/order.png',
						type:'已完成'
					},
				],
				options:[{
					image:'../../static/image/cart.png',
					name:'我的购物车'
				},
				{
					image:'../../static/image/youhuijuan.png',
					name:'我的优惠卷'
				},
				{
					image:'../../static/image/location.png',
					name:'我的地址'
				},
				{
					image:'../../static/image/fapiao.png',
					name:'发票管理'
				},
				{
					image:'../../static/image/phone.png',
					name:'联系我们'
				},
				{
					image:'../../static/image/set.png',
					name:'设置'
				},
				]
			}
		}
	}
</script>

<style scoped>
	.geren{
		background: linear-gradient(to top, #ffe566 10%, #ffd300 100%);
		height: 350upx; 
		display: flex; 
		align-items: center;
	}
	.userInfo{
		display: flex;
		align-items: center; 
		padding: 0 60upx; 
		align-content: center;
		height: 200upx;
	}
	.userInfo-text{
		flex-direction: column;
		display: flex;
		padding: 20upx 0;
	}
	.profile-photo{
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
		margin-right: 20upx;
		border: 5rpx solid #999999;
	}
	.nickname{
		font-size: 40upx;
	}
	.mobile-phone{
		font-size: 35upx;
		color: #555555;
	}
	.orderInfo{
		display: flex;
		justify-content: space-between;
		border: 2upx solid #C0C0C0;
		border-radius: 20upx;
		margin: 30upx 20upx;
	}
	.order-type{
		display: flex;
		flex-direction: column;
		width: 20%;
		padding: 20upx 10upx;
	}
	.order-type image{
		width: 50upx;
		height: 50upx;
		margin: 15upx auto;
	}
	.order-type text{
		font-size: 35upx;
		margin: 0 auto;
	}
	.options{
		display: flex;
		justify-content: space-between;
		border-bottom: 2upx solid #b8b8b8;
		margin: 20upx 20upx;
		padding: 10upx 0upx;
	}
	.options-v1{
		display: flex;
		align-items: center; 
	}
	.options-v2{
		display: flex;
		align-items: center; 
	}
	.options image{
		width: 45upx;
		height: 45upx;
		padding: 10upx 10upx;
	}
	.options-name{
		font-size: 30upx;
	}
	.options-i{
		font-size: 50upx;
		color: #999999;
	}
</style>
