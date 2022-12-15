from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
    location = models.CharField(max_length=300, blank=True)
    phone = models.CharField(max_length=50, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)


    def __str__(self):
        return f'{self.user.first_name} - {self.user.last_name}'
    
    # first_name, last_name, username, email, password1, password2, location, phone

class Category(models.Model):
    title = models.CharField(max_length=300)

    def __str__(self):
        return f'{self.title}'



class Products(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    image = models.ImageField(upload_to='uploads/')
    #product_id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    # slug = models.SlugField()
    inventory = models.IntegerField()
    discount = models.DecimalField(max_digits=4, decimal_places=2, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    size = models.IntegerField()

    def __str__(self):
        return f'{self.name} - {self.category}'

    @property
    def discount_price(self):
        if self.discount:
            new_price = self.price - (self.discount * self.price)
        else:
            new_price = self.price 

        return new_price


class Cart(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'{self.id}'

    
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.DO_NOTHING)
    product = models.ManyToManyField(Products)


    def __str__(self):
        return f'{self.id}'