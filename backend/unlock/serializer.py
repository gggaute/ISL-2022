from pyexpat import model
from rest_framework import serializers
from .models import LåsOppMobil

class LåsOppMobilSerializer(serializers.ModelSerializer):
    class Meta:
        model = LåsOppMobil
        fields = ('id','correctSolution', 'solutionImage', 
        'letter1', 'letter2', 'letter3', 
        'letter4', 'letter5', 'letter6', 
        'letter7', 'letter8', 'letter9')