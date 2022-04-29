from pyexpat import model
from rest_framework import serializers
from .models import FillInWord

'''
@author Synne, Ingvild
This is the serializer for the FillInWord exercise.
It is responsible for converting the fill_in_word object into datatypes that is understandable by react front-end.
After first validating the data, it allows parsed data to be converted back into complex types. 
'''
# Creates a ModelSerializer
class FillInWordSerializer(serializers.ModelSerializer):
     # Meta class that initializes  fields
    class Meta:
        model = FillInWord
        fields = ('id', 'correctSolutionIndex',
        'sentenceWord1', 'sentenceWord2', 'sentenceWord3',
        'sentenceWord4', 'sentenceWord5', 'sentenceWord6',
        'sentenceWord7', 'sentenceWord8', 'sentenceWord9',
        'sentenceWord10', 'sentenceWord11', 'sentenceWord12',
        'sentenceWord13', 'sentenceWord14', 'sentenceWord15',
        'answerWord1', 'answerWord2', 'answerWord3',
        'answerWord4', 'answerWord5', 'answerWord6')