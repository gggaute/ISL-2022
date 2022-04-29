# Imports
from rest_framework import serializers
from .models import Chat

'''
@author Aksel
This is the serializer for the chat exercise.
It is responsible for converting the chat object into datatypes that is understandable by react front-end.
After first validating the data, it allows parsed data to be converted back into complex types. 
'''

# Creates a ModelSerializer
class ChatSerializer(serializers.ModelSerializer):
    # Meta class that initializes  fields
    class Meta:
        model = Chat
        fields = ('id', 'sendericon', 'receivericon',
                  'answer11', 'answer12', 'correctanswer1', 'chatquestion1', 'explanation1',
                  'answer21', 'answer22', 'correctanswer2', 'chatquestion2', 'explanation2',
                  'answer31', 'answer32', 'correctanswer3', 'chatquestion3', 'explanation3',
                  'answer41', 'answer42', 'correctanswer4', 'chatquestion4', 'explanation4',
                  'answer51', 'answer52', 'correctanswer5', 'chatquestion5', 'explanation5')
