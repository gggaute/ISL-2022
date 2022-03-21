from django.shortcuts import render

from unlock.models import LåsOppMobil
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response 
from .serializer import LåsOppMobilSerializer

# Create your views here.

class LåsOppMobilViewSet(viewsets.ModelViewSet):
    queryset = LåsOppMobil.objects.all()
    permissions_classes = [ permissions.AllowAny ]
    serializer_class = LåsOppMobilSerializer


class GetLåsOppMobilView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getLåsOppMobil= LåsOppMobil.objects.get(pk=pk)
        except LåsOppMobil.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = LåsOppMobilSerializer(getLåsOppMobil)
        return Response(serializer.data)
