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
