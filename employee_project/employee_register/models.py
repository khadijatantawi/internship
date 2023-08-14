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
    
    
class Profile(models.Model):
  
    name = models.CharField(max_length=50, null=False)
    phone = models.CharField(max_length=15, unique=True, null=False)
    speed = models.CharField(max_length=20, null=True)
    pop_name = models.CharField(max_length=50, null=True)
    dslam_hostname = models.CharField(max_length=50, null=True)
    frame = models.IntegerField(null=True)
    attainable_speed = models.IntegerField(null=True)

    
    def __str__(self):
        # return self.fullname + '' + self.mobile + '' + self.emp_code + '' + self.position
        return self.name
    