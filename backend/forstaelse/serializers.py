from rest_framework import serializers
from .models import Forstaelse


class ForstaelseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forstaelse
        fields = ('id', 'chat1', 'question1', 'answer1', 'explanation1',
                  'chat2', 'question2', 'answer2', 'explanation2',
                  'chat3', 'question3', 'answer3', 'explanation3')
