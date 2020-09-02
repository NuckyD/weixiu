<template>
	<view>
		<view class="top">
			<view class="share">
			</view>
			<view class="top-name">
				<block v-for="(item,index) in navs" :key="index">
					<text :class="{clickNav:index == num}" @click="clickNav(index)">{{item.name}}</text>
				</block>
			</view>
			<view class="share">
				<image src="../../static/image/share.png"></image>
			</view>
		</view>
		<view style="height: 100upx;"></view>
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
		<view class="info">
			<view class="price">
				<text class="price-r">￥</text>
				<text class="price-y">4999</text>
			</view>
			<view class="name">
				HUAWEI MATE 30 5g全网通 8GB HUAWEI MATE 30 5g全网通 
			</view>
			<view class="guige"><!-- 规格 -->
				<view class="guige-xuanze">
					<view class="guige-mingzi">
						<text>颜色</text>
					</view>
					<view class="guige-canshu">
						<view><text>幻夜黑</text></view>
						<view><text>深海蓝</text></view>
						<view><text>樱雪晴空</text></view>
						<view><text>樱雪晴空</text></view>
						<view><text>深海蓝</text></view>
						<view><text>樱雪晴空</text></view>
					</view>
				</view>
			</view>
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
				],
				navs:[{
						name: "商品"
					},
					{
						name: "评价"
					},
					{
						name: "详情"
					}
				],
				num:0
			}
		},
		methods:{
			clickNav(index){
				this.num = index
			}
		}
	}
</script>

<style scoped>
	.top{
		height: 100upx;
		width: 100%;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 999;
		background-color: #ffffff;
	}
	.top-name{
		width: 40%;
		display: flex;
		justify-content: space-between;
		height: 80upx;
		margin: 0 auto;
		line-height: 80upx;
	}
	.top-name text{
		font-size: 35upx;
	}
	.clickNav{
		border-bottom: 6upx solid #3d110d;
	}
	.share{
		width: 60upx;
		height: 60upx;
		margin-right: 20upx;
	}
	.share image{
		width: 60upx;
		height: 60upx;
	}
	swiper{
		height: 400upx !important;
	}
	.item-image{
		width: 100%;
		height: 400upx !important;
	}
	.info{
		margin: 10upx 20upx;
	}
	.price{
		height: 100upx;
		width: 100%;
		align-items: baseline;
	}
	.price-r{
		font-size: 30upx;
		color: #ff0000;
		line-height: 100upx;
	}
	.price-y{
		font-size: 40upx;
		color: #ff0000;
		font-weight: bolder;
		line-height: 100upx;
	}
	.name{
		font-size: 35upx;
		color: #000000;
		font-weight: bolder;
		padding-bottom: 20upx;
		border-bottom: 2upx solid #bcbcbc;
	}
	.guige-xuanze{
		margin-top: 30upx;
		display: flex;
	}
	.guige-mingzi{
		display: flex;
		margin: 20upx 0upx;
		width: 20%;
	}
	.guige-mingzi text{
		font-size: 30upx;
	}
	.guige-canshu{
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.guige-canshu view{
		display: flex;
		align-items: center;
		height: 60upx;
		border: 1upx solid #cacaca;
		border-radius: 30upx;
		margin: 10upx 10upx;
		padding: 0 25upx;
		
	}
	.guige-canshu view text{
		font-size: 30upx;
		margin: 0 auto;
	}
</style>
