from django.urls import path 
from . import views


urlpatterns = [
    path('endpoints/', views.endpoints, name='endpoints'),
    path('products/', views.Product.as_view(), name='all-products'),
    path('products/<int:pk>', views.RetrieveProduct.as_view(), name='retrieve-product'), 
    path('cartitems/', views.CartItems.as_view(), name='cart-items')
]
