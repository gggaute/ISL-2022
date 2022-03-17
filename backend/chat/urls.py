from rest_framework import routers
from .api import ChatViewSet, GetChatView

router = routers.DefaultRouter()

router.register('chat', ChatViewSet, 'chat')
router.register('chat/<int:pk>', GetChatView, 'chatpk')

urlpatterns = router.urls