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