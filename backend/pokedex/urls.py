from rest_framework.routers import DefaultRouter
from .views import TypeViewSet, MoveViewSet, PokemonViewSet, EvolutionViewSet

# this page is used to define the URL routing for the Pokedex app.

router = DefaultRouter()
router.register(r'types', TypeViewSet)
router.register(r'moves', MoveViewSet)
router.register(r'pokemon', PokemonViewSet)
router.register(r'evolutions', EvolutionViewSet)

urlpatterns = router.urls
