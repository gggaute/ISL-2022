from rest_framework import routers
from .api import ChatViewSet

router = routers.DefaultRouter()
router.register('api/chat', ChatViewSet, 'chat')

urlpatterns = router.urls