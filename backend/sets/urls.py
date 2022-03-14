from rest_framework import routers
from .views import SetsView

router = routers.DefaultRouter()
router.register('sets/<int:pk>', SetsView, 'sets')

urlpatterns = router.urls