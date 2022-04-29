# Imports
from rest_framework import routers
from .views import ChatViewSet, GetChatView

'''
@author Aksel, Guri
These are the urls for the chat exercise. 
'''
router = routers.DefaultRouter()

# url for getting all chat exercises
router.register('chat', ChatViewSet, 'chat')

# url for getting a specific chat exercise given by its id
router.register('chat/<int:pk>', GetChatView, 'chatpk')

urlpatterns = router.urls