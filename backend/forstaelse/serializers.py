from rest_framework import serializers
from .models import Forstaelse

'''
@Author Aksel
This is the serializer for the forstaelse exercise.
It is responsible for converting the forstaelse objekt into datatypes that is understandable by react front-end.
After first validating the data, it allows parsed data to be converted back into complex types. 
'''

# Creates a ModelSerializer
class ForstaelseSerializer(serializers.ModelSerializer):
    # Meta class that initializes fields
    class Meta:
        model = Forstaelse
        fields = ('id', 'chat', 'question', 'answer', 'explanation')
