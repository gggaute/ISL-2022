from rydde_setninger.models import RyddeSetninger
from rest_framework import viewsets, permissions
from .serializers import RyddeSetningerSerializer

# Foreståelse Viewset
class RyddeSetningerViewSet(viewsets.ModelViewSet):
    queryset = RyddeSetninger.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RyddeSetningerSerializer