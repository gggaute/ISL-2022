from rest_framework import routers
from .views import SetsView, GetSetsView

router = routers.DefaultRouter()

'''
@author Group 2021
These are the urls for the sets.
'''

# url for getting all sets
router.register('sets', SetsView, 'sets')
# url for getting a specific set
router.register('sets/<int:pk>', GetSetsView, 'setspk')

urlpatterns = router.urls