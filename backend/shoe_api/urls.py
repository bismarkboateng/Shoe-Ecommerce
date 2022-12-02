from django.urls import path 
from . import views
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('endpoints/', views.endpoints, name='endpoints'),
    path('products/', views.Product.as_view(), name='all-products'),
    path('products/<int:pk>', views.RetrieveProduct.as_view(), name='retrieve-product'), 
    path('cartitems/', views.CartItems.as_view(), name='cart-items'), 
    path('accounts/users/', views.Users.as_view(), name='users'),
    path('login/', obtain_auth_token),
]