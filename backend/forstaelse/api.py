from forstaelse.models import Forstaelse
from rest_framework import viewsets, permissions
from .serializers import ForstaelseSerializer

# Foreståelse Viewset
class ForstaelseViewSet(viewsets.ModelViewSet):
    queryset = Forstaelse.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ForstaelseSerializer
