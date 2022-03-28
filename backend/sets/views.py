from rest_framework import status
from .serializers import SetsSerializer
from .models import Sets
from rest_framework import viewsets, permissions

"""
 @author Maja, Simen
"""


"""
 Set view without permission class meaning it is accessible to anyone. 
 Only allows get requests.
"""
class SetsView(viewsets.ModelViewSet):
    queryset = Sets.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SetsSerializer
    
class GetSetsView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getSet = Sets.objects.get(pk=pk)
        except Sets.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = SetsSerializer(getSet)
        return Response(serializer.data)