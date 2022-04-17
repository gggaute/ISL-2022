from chat.models import Chat
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ChatSerializer

'''
@author Aksel, Guri
This is the chat view.
It uses viewSets for viewing and editing Chat instances. 
'''

# Chat Viewset
class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ChatSerializer


class GetChatView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getChat = Chat.objects.get(pk=pk)
        except Chat.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ChatSerializer(getChat)
        return Response(serializer.data)