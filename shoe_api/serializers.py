from rest_framework import serializers
from .models import Products, Category, Cart, CartItem


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Products
        exclude = ['image']

    category = CategorySerializer()



class CartSeriliazer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = "__all__"

    cart = CartSeriliazer()
    product = ProductSerializer()

