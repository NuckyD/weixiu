<template>
	<view>
		<view class="orderType">
			<block v-for="(item,index) in typeList" :key='index'>
				<view class="orderType-item" @click="choose(index)" :class="{choosed: index == num}">
					<text>{{item.name}}</text>
				</view>
			</block>
		</view>
		<view class="order-list">
			<view class="order-list-v">
				<image v-if="!hasOrder" src="../../static/image/order.png" mode="widthFix"></image>
				<text>暂无订单!</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				typeList:[
						{name:'全部'},{name:'待支付'},{name:'待接单'},{name:'服务中'},{name:'待确认'},{name:'已完成'}
					],
				num: 0,
				hasOrder: false
			}
		},
		methods:{
			choose(index){
				this.num = index
			}
		}
	}
</script>

<style scoped>
	.orderType{
		display: flex;
		justify-content: space-between;
		height: 120upx;
		background-color: #ffffff;
		border-bottom: 2upx solid #8b8b8b;
		margin: 0 20upx;
	}
	.orderType-item{
		display: flex;
		align-items: center;
	}
	.orderType-item text{
		font-size: 30upx;
		margin: 0 auto;
	}
	.choosed{
		border-bottom: 4upx solid #e74d00;
	}
	.order-list{
		background-color: #cccccc;
	}
	.order-list{
		position: fixed;
		top: 120upx;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.order-list-v{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-direction: column;/* 垂直排 */
		height: 100%;
		width: 100%;
	}
	.order-list-v image{
		width: 150upx;
	}
	.order-list-v text{
		font-size: 38upx;
		font-weight: bold;
	}
</style>
