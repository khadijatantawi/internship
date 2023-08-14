# describe the process of going from a python object to json ->the structure we want to get back 
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Profile

User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Profile
        fields = ['id','name', 'phone', 'speed','pop_name','dslam_hostname', 'frame','attainable_speed']
        


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def create(self, data):
        username = data.get("username")
        password = data.get("password")
        object = User.objects.create_user(username=username, password=password)
        return object
 
 
    
# class UserSerializer(serializers.ModelSerializer):
#        class Meta : 
#         model = User
#         fields = ['id','name', 'email','password' ]