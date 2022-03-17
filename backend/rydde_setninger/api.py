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

class GetRyddeSetningerView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getRyddeSetninger = RyddeSetninger.objects.get(pk=pk)
        except RyddeSetninger.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = RyddeSetningerSerializer(getRyddeSetninger)
        return Response(serializer.data)