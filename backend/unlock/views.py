from django.shortcuts import render

from unlock.models import Unlock
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response 
from .serializer import UnlockSerializer

# Create your views here.

class UnlockViewSet(viewsets.ModelViewSet):
    queryset = Unlock.objects.all()
    permissions_classes = [ permissions.AllowAny ]
    serializer_class = UnlockSerializer


class GetUnlockView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getUnlock= Unlock.objects.get(pk=pk)
        except Unlock.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = UnlockSerializer(getUnlock)
        return Response(serializer.data)
