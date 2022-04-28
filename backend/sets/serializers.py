from rest_framework import serializers
from .models import Sets


"""
 @author Group 2021
 Revised by Guri
 This is the serializer for the all the models related to exercise sets.
"""

class SetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sets
        fields = ('id', 'title',
                  'comprehension1', 'comprehension2', 'comprehension3', 'comprehension4', 'comprehension5', 'comprehension6',
                  'chat1', 'chat2', 'chat3', 'chat4', 'chat5', 'chat6',
                  'sortSentence1', 'sortSentence2', 'sortSentence3', 'sortSentence4', 'sortSentence5', 'sortSentence6',
                  'fillInWord1', 'fillInWord2', 'fillInWord3', 'fillInWord4', 'fillInWord5', 'fillInWord6',
                  'unlock1', 'unlock2', 'unlock3', 'unlock4', 'unlock5', 'unlock6')
