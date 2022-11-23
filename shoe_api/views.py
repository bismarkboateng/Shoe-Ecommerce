from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView, Response
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.decorators import api_view
from .models import Products, Category, CartItem
from .serializers import ProductSerializer, CartItemSerializer



@api_view(['GET'])
def endpoints(request):

    endpoints = {
        'allproducts': '/apis/products',
        'retrieve-a-product': '/apis/products/<int:str>',
        'all-cart-item': '/apis/cartitems'
    }

    return Response(endpoints)



class Product(APIView):
    def get(self, request, *args, **kwargs):
        product = Products.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)


class RetrieveProduct(RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductSerializer


class CartItems(ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer
