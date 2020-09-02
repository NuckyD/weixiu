<template>
	<view class="product-list">
		<view class="product-content">
			<block v-for="(item,index) in productList" :key="index">
				<view class="product">
					<view class="product-img">
						<image mode="aspectFill" :src="item.image"></image>
					</view>
					<view class="product-name">
						<text>{{item.name}}</text>
					</view>
					<view class="product-sale">
						<view class="product-sale-money">
							<text class="product-m">￥</text>
							<text class="product-o">{{item.price}}</text>
						</view>
						<view poduct-sale-s>
							<text class="product-s">销量:{{item.sale}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		name:'product',
		data() {
			return {
				productList:[{
					image:'https://img.alicdn.com/bao/uploaded///img.alicdn.com/i1/2256687003/O1CN019xjy7D21bQFLCwTdA_!!2256687003.png_230x230.jpg',
					name:'珠海长隆横琴湾酒店2天1晚自助餐水世界',
					price:999,
					sale:100
				},
				{
					image:'https://img.alicdn.com/bao/uploaded///img.alicdn.com/i1/2256687003/O1CN019xjy7D21bQFLCwTdA_!!2256687003.png_230x230.jpg',
					name:'珠海长隆横琴湾酒店2天1晚自助餐水世界',
					price:999,
					sale:100
				},
				{
					image:'https://img.alicdn.com/bao/uploaded///img.alicdn.com/i1/2256687003/O1CN019xjy7D21bQFLCwTdA_!!2256687003.png_230x230.jpg',
					name:'珠海长隆横琴湾酒店2天1晚自助餐水世界',
					price:999,
					sale:100
				}
				]
			}
		}
		
	}
</script>

<style scoped>
	.product-list{
		margin: 0 20upx;
	}
	.product-content{
		display: flex;
		flex-wrap: warp;
		justify-content: space-between;
		width: 100%;
		-webkit-flex-wrap: wrap;
		overflow: hidden;
	}
	.product{
		width: 48%;
		flex-direction: column;
		display: flex;
		box-sizing: border-box;
		border: 1rpx solid #e6e6e6;
		margin: 20upx 0;
	}
	.product-img{
		height: 400upx !important;
		object-fit: cover;
		overflow: hidden;
	}
	.product-img image {
		width: 100% !important;
		height: 100% !important;
		object-fit: cover;
		border-radius: 10rpx;
	}
	.product-name{
		font-size: 32upx;
		color: #444444;
		font-weight: bold;
		line-height: 50upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		height: 100upx !important;
	}
	.product-sale{
		display: flex;
		justify-content: space-between;
	}
	.product-sale view{
		display: flex;
		align-items: center; 
	}
	.product-m{
		font-size: 28upx;
		color: #ff5500;
	}
	.product-o{
		font-size: 40upx;
		color: #ff5500;
	}
	.product-s{
		font-size: 30upx;
		color: #b1b185;
	}
</style>
