from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# class User(AbstractUser):
#     name =models.CharField(max_length=200)
#     email=models.EmailField (unique=True)
#     password=models.CharField(max_length=200)
#     username=None
    
#     USERNAME_FIELD='email'
#     REQUIRED_FIELDS=[]
    
    
class Position(models.Model):
    title= models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
    
    
class Employee(models.Model):

# class Employee(models.Model):
    fullname= models.CharField(max_length=100)
    emp_code= models.CharField (max_length=200)
    mobile= models.CharField(max_length=100)
    position= models.ForeignKey(Position, on_delete=models.CASCADE)
    
    # USERNAME_FIELD='emp_code'
    # REQUIRED_FIELDS=[]
    
    def __str__(self):
        return self.fullname + '' + self.mobile + '' + self.emp_code + '' + self.position

    