# describe the process of going from a python object to json ->the structure we want to get back 
from rest_framework import serializers
from .models import Employee 

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Employee
        fields = ['id','fullname', 'mobile', 'position']
        
# class UserSerializer(serializers.ModelSerializer):
#        class Meta : 
#         model = User
#         fields = ['id','name', 'email','password' ]