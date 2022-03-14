from rest_framework import routers
from .api import ChatViewSet

router = routers.DefaultRouter()
router.register('chat/<int:pk>', ChatViewSet, 'chat')

urlpatterns = router.urls