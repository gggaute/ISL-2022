from pyexpat import model
from rest_framework import serializers
from .models import DraInnManglendeOrd

class DraInnManglendeOrdSerializer(serializers.ModelSerializer):
    class Meta:
        model = DraInnManglendeOrd
        fields = ('id', 'correctSolution',
        'sentenceWord1', 'sentenceWord2', 'sentenceWord3',
        'sentenceWord4', 'sentenceWord5', 'sentenceWord6',
        'sentenceWord7', 'sentenceWord8', 'sentenceWord9',
        'sentenceWord10', 'sentenceWord11', 'sentenceWord12',
        'sentenceWord13', 'sentenceWord14', 'sentenceWord15',
        'answerWord1', 'answerWord2', 'answerWord3',
        'answerWord4', 'answerWord5', 'answerWord6')