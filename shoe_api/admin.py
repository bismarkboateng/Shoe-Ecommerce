from django.contrib import admin
from .models import Products, Category, Cart, CartItem
# Register your models here.


admin.site.register(Products)
admin.site.register(Category)
admin.site.register(CartItem)
admin.site.register(Cart)