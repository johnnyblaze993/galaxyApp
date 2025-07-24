from django.shortcuts import render
from rest_framework import viewsets
from .models import Type, Move, Pokemon, Evolution
from .serializers import TypeSerializer, MoveSerializer, PokemonSerializer, EvolutionSerializer

class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class MoveViewSet(viewsets.ModelViewSet):
    queryset = Move.objects.all()
    serializer_class = MoveSerializer

class PokemonViewSet(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class EvolutionViewSet(viewsets.ModelViewSet):
    queryset = Evolution.objects.all()
    serializer_class = EvolutionSerializer