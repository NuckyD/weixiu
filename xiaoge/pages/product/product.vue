<template>
	<view>
		<view class="swi-view">
			<swiper indicator-dots="true" autoplay="true" interval="3000" duration="500">
				<block v-for="(item,index) in productImages" :key="index">
					 <swiper-item>
						<view  class="swiper-item uni-bg-red">
							<image :src="item.image" mode="aspectFill" class="item-image"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="title">
			<text class="title-name">洗衣机维修</text>
			<text class="price">人工费：面议</text>
		</view>
		<view class="xuanze">
			<text class="yixuanfuwu">已选服务</text>
			<text class="fuwu">其他></text>
		</view>
		<view style="height: 2000upx"></view>
		<buy></buy>
	</view>
	
</template>

<script>
	import buy from './component/buy.vue'
	export default{
		components:{
			buy
		},
		data(){
			return{
				productImages:[
					{
						image:'https://img.alicdn.com/bao/uploaded///img.alicdn.com/i3/2995239652/O1CN01364Vxv2LAfOmdWfWU_!!2995239652.jpg_230x230.jpg'
					},
					{
						image:'https://img.alicdn.com/bao/uploaded///img.alicdn.com/i2/4227758366/O1CN01V6agiX2Bfg3v6ZO9l_!!4227758366.jpg_230x230.jpg'
					},
					{
						image:'https://img.alicdn.com/bao/uploaded///img.alicdn.com/i1/3650412795/O1CN01IDgTO21WW9aQ9ZsXN_!!3650412795.jpg_230x230.jpg'
					}
				]
			}
		}
	}
</script>

<style scoped>
	swiper{
		height: 400upx !important;
	}
	.item-image{
		width: 100%;
		height: 400upx !important;
	}
	.title{
		display: flex;
		justify-content: space-between;
		height: 80upx;
		width: 94%;
		align-items: center;
		margin: 10upx auto;
		border-bottom: 2upx solid #D0D0D0;
	}
	.title-name{
		font-size: 30upx;
	}
	.price{
		font-size: 30upx;
		color: #ffb92c;
	}
	.xuanze{
		display: flex;
		justify-content: space-between;
		height: 100upx;
		width: 94%;
		margin: 10upx auto;
		align-items: center;
	}
	.yixuanfuwu{
		font-size: 30upx;
	}
	.fuwu{
		font-size: 30upx;
	}
</style>
