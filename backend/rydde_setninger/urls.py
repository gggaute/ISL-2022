from rest_framework import routers
from .views import GetRyddeSetningerView, RyddeSetningerViewSet

'''
@author Aksel, Guri
This is the urls for the forstaelse exercise. 
'''

router = routers.DefaultRouter()

# url for getting all RyddeSetninger exercises
router.register('rydde_setninger', RyddeSetningerViewSet, 'RyddeSetninger')
# url for getting a spesifik forstaelse exercise given by its id
router.register('rydde_setninger/<int:pk>', GetRyddeSetningerView, 'RyddeSetningerpk')

urlpatterns = router.urls