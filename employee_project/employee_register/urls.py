from django.contrib import admin
from django.urls import path, include 
from . import views 

urlpatterns = [
    
    #post->insert record & get -> get all records 
    path('', views.employee_list.as_view() , name = 'employee_insert'),
        
    # get request to retrieve and display all records 
    path('list/',views.employee_list.as_view(), name = 'employee_list'),

    # get details of certain employee by ID 
    path('list/<int:id>',views.employee_detail.as_view() , name = 'employee_list'),
    
  
    #localhost:portnumber/employee/list  get and post request for insert operation
    
    path('<int:id>/', views.employee_form.as_view(), name='employee_update'), #get and post request for update operation 
    
    
    # path('list/',include('employee_register.urls'))
    path('delete/<int:id>', views.employee_delete.as_view(), name='employee_delete'),

    
    # path('register',views.register.as_view(), name ='register')

]


 