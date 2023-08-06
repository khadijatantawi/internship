from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import EmployeeForm
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views import View 
from rest_framework.views import APIView
# Create your views here.
#this is where you create all of your endpoints an endpoint is certain url where you can access data from 




#function of list with rest api
# def employee_list(request):
#     if request.method=='GET':
#         context = Employee.objects.all()
#         serializer=EmployeeSerializer(context,many= True)
#         return JsonResponse({'employee':serializer.data})
    
#     if request.method == 'POST':
#         serializer = EmployeeSerializer(data= request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status= status.HTTP_201_CREATED ) 
   
#------> if in return is serializer.data only it will return a list the {'':serializer.data}->returns an object bec we throw it in a dictionary and we wont need the safe=False 

#old without api's
# def employee_list(request):  
#     context = {'employee_list':Employee.objects.all()}
#     return render(request , "employee_register/employee_list.html",context)# second parameter is the html path 

#to make fn take get and post requests we need to add a decorator 
#decorater is smth you put above your fn to describe its functionality  

#better way of doing it than the fn above we'll be able to return json or html for better data browsing 
# @api_view(['GET','PUT','DELETE'])
# def employee_detail(request,id):
    
#     try:
#         employee= Employee.objects.get(pk=id) # pk = primary key 
#     except Employee.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
        
#     if request.method =='GET':
#        serializer= EmployeeSerializer(employee)
#        return Response(serializer.data) # response allow us to see result through web
    
#     elif request.method =='PUT': #for updating 
#         serializer = EmployeeSerializer(employee, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     elif request.method =='DELETE': 
#         employee.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT )
    
# def employee_form(request, id=0): 
#     # get and post request for update operation
#     if request.method == "GET":
#         if id == 0 :
#             form = EmployeeForm() # if it is an insert operation we'll have an empty form 
#         else :
#             employee=Employee.objects.get(pk=id)
#             form= EmployeeForm(instance=employee)
#         return render(request , "employee_register/employee_form.html", {'form':form })
#     else :
#         if id ==0 :
#             form= EmployeeForm(request.POST)
#         else :
#             employee=Employee.objects.get(pk=id)
#             form=EmployeeForm(request.POST, instance= employee) #inside the emplotyee oject we need to have 
            
#         # if form.is_valid():
#         form.save()
#         return redirect('/employee/list')
  


# def employee_delete(request,id):
#     employee=Employee.objects.get(pk=id)
#     employee.delete()
#     return redirect('/employee/list')


#In order to show the employee form and employee list we have to use django templates and in order to work with templates in django first of all we 
#will create a templates folder inside the app folder in this case we have the app folder employee _register inside that we have to create another folder 
#with the same name as that of the app 

# @api_view(['GET','POST'])      
class employee_list(APIView):
    
    def get(self,request): #we pass self because its a class so we can reference the actual view  
        context = Employee.objects.all()
        serializer=EmployeeSerializer(context,many= True)
        return Response({'employee':serializer.data})  
    
    def post(self,request):
        serializer = EmployeeSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED ) 
        
# @api_view(['GET','PUT','DELETE'])
class employee_detail(APIView):

    def get(self,request,id):
        try:
            employee= Employee.objects.get(pk=id) # pk = primary key 
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)  
        serializer= EmployeeSerializer(employee)
        return Response(serializer.data)  
        
    def put(self,request,id):
        try:
            employee= Employee.objects.get(pk=id) # pk = primary key 
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)  
        serializer = EmployeeSerializer(employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,id):    
        try:
            employee= Employee.objects.get(pk=id) # pk = primary key 
        except Employee.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)  

        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT )
    
    
    
class employee_form(APIView): 
    # get and post request for update operation
    def get(self,request,id):
        if id == 0 :
            form = EmployeeForm() # if it is an insert operation we'll have an empty form 
        else :
            employee=Employee.objects.get(pk=id)
            form= EmployeeForm(instance=employee)
        return render(request , "employee_register/employee_form.html", {'form':form })
    
    def post(self,request,id):
        if id ==0 :
            form= EmployeeForm(request.POST)
        else :
            employee=Employee.objects.get(pk=id)
            form=EmployeeForm(request.POST, instance= employee) #inside the emplotyee oject we need to have 
            
        # if form.is_valid():
        form.save()
        return redirect('/employee/list')
  


class employee_delete(APIView):
    def get (self , request , id ):
        employee=Employee.objects.get(pk=id)
        employee.delete()
        return redirect('/employee/list')

# class register(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)