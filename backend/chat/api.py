from chat.models import Chat
from rest_framework import viewsets, permissions
from .serializers import ChatSerializer

# Foreståelse Viewset
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