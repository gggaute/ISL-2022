from forstaelse.models import Forstaelse
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ForstaelseSerializer

'''
@author Aksel, Guri
This is the DraInnManglendeOrd view.
It uses viewSets for viewing and editing Forstaelse instances. 
'''

# Forestaelse Viewset
class ForstaelseViewSet(viewsets.ModelViewSet):
    queryset = Forstaelse.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ForstaelseSerializer

class GetForstaelseView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getForstaelse = Forstaelse.objects.get(pk=pk)
        except Forstaelse.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ForstaelseSerializer(getForstaelse)
        return Response(serializer.data)