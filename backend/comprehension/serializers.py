from rest_framework import serializers
from .models import Comprehension

'''
@author Aksel, Guri
This is the serializer for the comprehension exercise.
It is responsible for converting the comprehension object into datatypes that is understandable by react front-end.
After first validating the data, it allows parsed data to be converted back into complex types. 
'''

# Creates a ModelSerializer
class ComprehensionSerializer(serializers.ModelSerializer):
    # Meta class that initializes fields
    class Meta:
        model = Comprehension
        fields = ('id', 'chat', 'question', 'answer', 'explanation')
