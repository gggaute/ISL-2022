from rest_framework import routers
from .views import LåsOppMobilViewSet, GetLåsOppMobilView

router = routers.DefaultRouter()
router.register('unlock', LåsOppMobilViewSet, 'unlock')
router.register('unlock/<int:pk>', GetLåsOppMobilView, 'unlockpk')

urlpatterns = router.urls