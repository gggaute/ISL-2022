from rest_framework import routers
from .views import SetsView, GetSetsView

router = routers.DefaultRouter()
router.register('sets', SetsView, 'sets')
router.register('sets/<int:pk>', GetSetsView, 'setspk')

urlpatterns = router.urls