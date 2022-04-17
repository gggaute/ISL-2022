from rest_framework import routers
from .views import GetSortSentenceView, SortSentenceViewSet

'''
@author Aksel, Guri
This is the urls for the sortSentence exercise. 
'''

router = routers.DefaultRouter()

# url for getting all sortSentence exercises
router.register('sort_sentence', SortSentenceViewSet, 'sortSentence')
# url for getting a specific sortSentence exercise given by its id
router.register('sort_sentence/<int:pk>', GetSortSentenceView, 'SortSentencepk')

urlpatterns = router.urls