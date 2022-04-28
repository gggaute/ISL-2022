from sort_sentence.models import SortSentence
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import SortSentenceSerializer

'''
@author Aksel, Guri
This is the SortSentence view.
It uses viewSets for viewing sortSentence instances. 
'''


# SortSentence Viewset
class SortSentenceViewSet(viewsets.ModelViewSet):
    queryset = SortSentence.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SortSentenceSerializer

class GetSortSentenceView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getSortSentence= SortSentence.objects.get(pk=pk)
        except SortSentence.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = SortSentenceSerializer(SortSentence)
        return Response(serializer.data)