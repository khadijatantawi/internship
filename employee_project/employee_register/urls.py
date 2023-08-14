from django.contrib import admin
from django.urls import path 
# from . import views 

from .views import ProfileListAPIView, ProfileDetailAPIView, UserListCreateAPIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



# from rest_framework_simplejwt import views as jwt_views

# from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView 

urlpatterns = [
    
    # #post->insert record & get -> get all records 
    # path('', views.employee_list.as_view() , name = 'employee_insert'),
        
    # # get request to retrieve and display all records 
    # path('list/',views.employee_list.as_view(), name = 'employee_list'),

    # # get details of certain employee by ID 
    # path('list/<int:id>',views.employee_detail.as_view() , name = 'employee_list'),
    
  
    # #localhost:portnumber/employee/list  get and post request for insert operation
    
    # path('<int:id>/', views.employee_form.as_view(), name='employee_update'), #get and post request for update operation 
    
    
    # # path('list/',include('employee_register.urls'))
    # path('delete/<int:id>', views.employee_delete.as_view(), name='employee_delete'),

    
    # #jwt C
    # path('api/token/', views.CustomObtainJSONWebToken.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', views.CustomRefreshJSONWebToken.as_view(), name='token_refresh'),
    
    # path('register',views.register.as_view(), name ='register')
    # path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    
    
#     path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path("admin/", admin.site.urls),
    path('users/', UserListCreateAPIView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profiles/', ProfileListAPIView.as_view(), name='Profiles-list'),
    path('profiles/<int:pk>/',
         ProfileDetailAPIView.as_view(), name='Profile-detail'),

]


 