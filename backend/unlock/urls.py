from rest_framework import routers
from .views import UnlockViewSet, GetUnlockView

router = routers.DefaultRouter()

'''
@author Ingvild
These are the urls for the Unlock exercise. 
'''

# url for getting all unlock exercises
router.register('unlock', UnlockViewSet, 'unlock')
# url for getting a specific unlock exercise given by its id
router.register('unlock/<int:pk>', GetUnlockView, 'unlockpk')

urlpatterns = router.urls