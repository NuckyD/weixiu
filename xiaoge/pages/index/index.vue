<template>
	<view>
		<view class="search-cont">
			<view class="location">
				<image class="location-image" src="../../static/image/location.png"></image>
				<text class="location-text">佛山市·顺德区</text>
			</view>
			<view class="search">
				<input type="text" placeholder="你想修那?" disabled />
				<image src="/static/image/search.png" mode="widthFix" class="search-img"></image>
			</view>
		</view>
		<view class="swi-view">
			<swiper indicator-dots="true" autoplay="true" interval="3000" duration="500">
				<block v-for="(item,index) in images" :key="index">
					 <swiper-item>
						<view  class="swiper-item uni-bg-red">
							<image :src="item.image" mode="aspectFill" class="item-image"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view>
			<view class="remen">
				<text class="remenfuwu">热门服务</text>
				<text class="tiyan">体验品质服务 享受美好生活</text>
			</view>
			<block v-for="(item, index) in classifyList" :key="index">
				<view>
					<view class="classify">
						<view class="classify-name">
							<image src="../../static/image/index.png"></image>
						</view>
						<block v-for="(item2, index2) in item.classify" :key="index2">
							<view class="classify-item" @click="choose()">
								<image :src="item2.image"></image>
								<text>{{item2.name}}</text>
							</view>
						</block>
					</view>
				</view>
			</block>
			<view class="quanbu">
				<text>查看全部服务>></text>
			</view>
		</view>
		<view>
			<image class="liucheng" src="../../static/image/liucheng.png" mode="widthFix"></image>
		</view>
		<lianxi></lianxi>
		<home-load v-if="homeload"></home-load>
	</view>
</template>

<script>
	import lianxi from './component/lianxi.vue'
	export default {
		components:{
			lianxi
		},
		data() {
			return {
				images: [{
					image:"https://gw.alicdn.com/tfs/TB1SjD9h_M11u4jSZPxXXahcXXa-490-300.png"
				},
				{
					image:"https://img.alicdn.com/tfs/TB1eLa4gk9l0K4jSZFKXXXFjpXa-490-300.png"
				}
				],
				classifyList:[{
					classify:[{
							image:"../../static/image/bingxiang.png",
							name:"冰箱维修"
						},
						{
							image:"../../static/image/kongtiao.png",
							name:"空调维修"
						},
						{
							image:"../../static/image/xiyiji.png",
							name:"洗衣机维修"
						},
						{
							image:"../../static/image/chufang.png",
							name:"厨房家电维修"
						}
					]
				},
				{
					classify:[{
							image:"../../static/image/bingxiang.png",
							name:"冰箱维修"
						},
						{
							image:"../../static/image/kongtiao.png",
							name:"空调维修"
						},
						{
							image:"../../static/image/xiyiji.png",
							name:"洗衣机维修"
						},
						{
							image:"../../static/image/chufang.png",
							name:"厨房家电维修"
						}
					]
				},
				{
					classify:[{
							image:"../../static/image/bingxiang.png",
							name:"冰箱维修"
						},
						{
							image:"../../static/image/kongtiao.png",
							name:"空调维修"
						},
						{
							image:"../../static/image/xiyiji.png",
							name:"洗衣机维修"
						},
						{
							image:"../../static/image/chufang.png",
							name:"厨房家电维修"
						}
					]
				},
				{
					classify:[{
							image:"../../static/image/bingxiang.png",
							name:"冰箱维修"
						},
						{
							image:"../../static/image/kongtiao.png",
							name:"空调维修"
						},
						{
							image:"../../static/image/xiyiji.png",
							name:"洗衣机维修"
						},
						{
							image:"../../static/image/chufang.png",
							name:"厨房家电维修"
						}
					]
				}],
				homeload: false
			}
		},
		onLoad() {

		},
		methods: {
			choose(){
				uni.navigateTo({
					url:'../product/product'
				})
			}
		}
	}
</script>

<style scoped>
	.search-cont{
		display: flex;
		justify-content: space-between;
		height: 70upx;
		padding: 30upx 10upx;
		align-items: center;
	}
	.location{
		display: flex;
		align-items: center;
		width: 350upx;
		height: 50upx;
		padding: 0 15upx;
		margin: 0 auto;
	}
	.location-image{
		width: 40upx;
		height: 40upx;
		padding: 0 15upx;
	}
	.location-text{
		font-size: 25upx;
	}
	.search{
		width: 100%;
		height: 70upx;
		line-height: 70upx;
		display: flex;
		flex-direction: flex;
		border-radius: 50upx;
		background-color: #C0C0C0;
	}
	.search input {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 30upx;
		color: #ffffff;
		margin-left: 30upx;
	}
	.search-img{
		width: 40upx;
		height: 40upx;
		margin: auto 15upx auto auto;
	}
	.swi-view{
		margin: 15upx;
	}
	.item-image{
		width: 100%;
		height: 300upx;
		border-radius: 30upx;
	}
	.remen{
		display: flex;
		align-items: center;
		height: 70upx;
		padding: 10upx 10upx;
	}
	.remenfuwu{
		padding: 0upx 10upx;
		font-size: 35upx;
		color: #333333;
	}
	.tiyan{
		padding: 0upx 20upx;
		font-size: 25upx;
		color: #C0C0C0;
	}
	.classify{
		display: flex;
		justify-content: space-between;
		text-align: center;
	}
	.classify-name image{
		width: 90upx;
		height: 120upx;
	}
	.classify-item image{
		width: 60upx;
		height: 60upx;
		margin: 15upx 0;
	}
	.classify-item text{
		font-size: 30upx;
		display: block;
	}
	.quanbu{
		display: flex;
		height: 70upx;
		margin: 30upx 20upx;
		align-items: center;
		background-color: #d0d0d0;
		border-radius: 30upx;
	}
	.quanbu text{
		font-size: 35upx;
		color: #f15000;
		margin: 0 auto;
	}
	.liucheng{
		width: 100%;
		margin: 20upx auto;
	}
</style>
