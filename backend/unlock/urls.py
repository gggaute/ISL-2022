from rest_framework import routers
from .views import LåsOppMobilViewSet

router = routers.DefaultRouter()
router.register('unlock', LåsOppMobilViewSet, 'unlock')

urlpatterns = router.urls