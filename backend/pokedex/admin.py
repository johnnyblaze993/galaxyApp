from django.contrib import admin
from .models import Type, Move, Pokemon, PokemonType, PokemonMove, Evolution

# Register your models here.

admin.site.register(Type)
admin.site.register(Move)
admin.site.register(Pokemon)
admin.site.register(PokemonType)
admin.site.register(PokemonMove)
admin.site.register(Evolution)