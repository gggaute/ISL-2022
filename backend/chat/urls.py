from rest_framework import routers
from .api import ChatViewSet

router = routers.DefaultRouter()
router.register('chat', ChatViewSet, 'chat')

urlpatterns = router.urls