# Imports
from rest_framework import serializers
from .models import RyddeSetninger

'''
@Author Aksel
This is the serializer for the forstaelse exercise.
It is responsible for converting the ryddeSetninger objekt into datatypes that is understandable by react front-end.
After first validating the data, it allows parsed data to be converted back into complex types. 
'''

# Creates a ModelSerializer
class RyddeSetningerSerializer(serializers.ModelSerializer):
    # Meta class that initializes fields
    class Meta:
        model = RyddeSetninger
        fields = ('id', 'word1', 'wordClass1', 'word2', 'wordClass2', 'word3', 'wordClass3',
                  'word4', 'wordClass4', 'word5', 'wordClass5', 'word6', 'wordClass6', 'word7', 'wordClass7', 'word8',
                  'wordClass8', 'word9', 'wordClass9', 'word10', 'wordClass10', 'word11', 'wordClass11', 'word12',
                  'wordClass12', 'word13', 'wordClass13', 'word14', 'wordClass14', 'word15', 'wordClass15')
