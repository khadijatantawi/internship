from django import forms
from .models import Profile
 
class EmployeeForm(forms.ModelForm):
    class Meta :
        model = Profile
        fields= '__all__' 
        
    
    def __init__(self , *args , **kwargs):
        super(EmployeeForm, self).__init__(*args,**kwargs)
        self.fields['position'].empty_label="select"
        