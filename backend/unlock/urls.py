from rest_framework import routers
from .views import UnlockViewSet, GetUnlockView

router = routers.DefaultRouter()
router.register('unlock', UnlockViewSet, 'unlock')
router.register('unlock/<int:pk>', GetUnlockView, 'unlockpk')

urlpatterns = router.urls