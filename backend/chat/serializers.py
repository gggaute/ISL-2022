from rest_framework import serializers
from .models import Chat


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'answer11', 'answer12', 'correctanswer1', 'chatquestion1',
                  'answer21', 'answer22', 'correctanswer2', 'chatquestion2',
                  'answer31', 'answer32', 'correctanswer3', 'chatquestion3', 'sendericon', 'receivericon')
