<template>
	<view>
		<view class="search-cont">
			<view class="location">
				<image class="location-image" src="../../static/location.png"></image>
				<text class="location-text">佛山市·顺德区</text>
			</view>
			<view class="search">
				<input type="text" placeholder="你想修那?" disabled />
				<image src="/static/search.png" mode="widthFix" class="search-img"></image>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: [{
					image:"https://gw.alicdn.com/tfs/TB1SjD9h_M11u4jSZPxXXahcXXa-490-300.png"
				},
				{
					image:"https://img.alicdn.com/tfs/TB1eLa4gk9l0K4jSZFKXXXFjpXa-490-300.png"
				}
				],
			}
		},
		onLoad() {

		},
		methods: {

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
</style>
