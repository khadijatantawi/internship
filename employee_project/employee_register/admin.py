from django.contrib import admin

# Register your models here.

from .models import Position, Employee
admin.site.register(Position)
admin.site.register(Employee)
# admin.site.register(User)
