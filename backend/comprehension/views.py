from comprehension.models import Comprehension
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import ComprehensionSerializer

'''
@author Aksel, Guri
This is the Comprehension view.
It uses viewSets for viewing Comprehension instances. 
'''

# Comprehension Viewset
class ComprehensionViewSet(viewsets.ModelViewSet):
    queryset = Comprehension.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ComprehensionSerializer

class GetComprehensionView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getComprehension = Comprehension.objects.get(pk=pk)
        except Comprehension.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ComprehensionSerializer(getComprehension)
        return Response(serializer.data)