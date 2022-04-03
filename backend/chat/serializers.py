from rest_framework import serializers
from .models import Chat


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'sendericon', 'receivericon',
                  'answer11', 'answer12', 'correctanswer1', 'chatquestion1', 'explanation1',
                  'answer21', 'answer22', 'correctanswer2', 'chatquestion2', 'explanation2',
                  'answer31', 'answer32', 'correctanswer3', 'chatquestion3', 'explanation3',
                  'answer41', 'answer42', 'correctanswer4', 'chatquestion4', 'explanation4',
                  'answer51', 'answer52', 'correctanswer5', 'chatquestion5', 'explanation5')
