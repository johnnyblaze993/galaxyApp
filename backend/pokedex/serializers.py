from rest_framework import serializers
from .models import Type, Move, Pokemon, Evolution

# these convert the models into JSON serializable formats for API responses.

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'

class MoveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Move
        fields = '__all__'

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = '__all__'

class EvolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evolution
        fields = '__all__'
