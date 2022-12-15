from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView, Response
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.decorators import api_view
from .models import Products, CartItem, Customer
from .serializers import ProductSerializer, CartItemSerializer, CustomerSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly



@api_view(['GET'])
def endpoints(request):
    endpoints = [
    {
        "Endpoint": "/apis/products",
        "Method": "GET", 
        "Body": "List of all products",
        "Descriptin": "Gets all product data"
    }, 
    {
        "Endpoint": "/apis/products/<int:str>",
        "Method" : "GET",
        "Body": "A product",
        "Description": "Retrieve a product"
    },
    {
        "Endpoint": "/apis/cartitems/",
        "Method": "GET",
        "Body" : "Cart items",
        "Description": "Retrieve all cart items"
    },
    {
        "Endpoint": "/apis/accounts/users/",
        "Method": "GET",
        "Body": "Authenticated Users",
        "Description": "Retrieve all users"
    }
    ]

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
    permission_classes = [IsAuthenticatedOrReadOnly]
    authentication_classes = [TokenAuthentication]


class Users(ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

