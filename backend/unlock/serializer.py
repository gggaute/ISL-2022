from pyexpat import model
from rest_framework import serializers
from .models import Unlock

'''
@author Ingvild
This is the serializer for the unlock exercise.
It is responsible for converting the unlock object into datatypes that is understandable by react front-end.
After first validating the data, it allows parsed data to be converted back into complex types. 
'''
class UnlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unlock
        fields = ('id','correctSolution', 'solutionImage', 
        'letter1', 'letter2', 'letter3', 
        'letter4', 'letter5', 'letter6', 
        'letter7', 'letter8', 'letter9')