from rest_framework import serializers
from .models import Forstaelse


class ForstaelseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forstaelse
        fields = ('id', 'chat', 'question', 'answer', 'explanation')
