from django.db import models
import uuid
from django.db import models

# Create your models here.

class Type(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Move(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    power = models.IntegerField()
    accuracy = models.FloatField()
    type = models.ForeignKey(Type, on_delete=models.CASCADE, related_name="moves")

    def __str__(self):
        return self.name

class Pokemon(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    pokedex_num = models.IntegerField(unique=True)
    does_evolve = models.BooleanField(default=False)
    height = models.FloatField()
    weight = models.FloatField()
    base_stats = models.JSONField()  # e.g. {"hp": 45, "atk": 49, ...}
    description = models.TextField()

    types = models.ManyToManyField(Type, through='PokemonType')
    moves = models.ManyToManyField(Move, through='PokemonMove')

    def __str__(self):
        return self.name

class PokemonType(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)

class PokemonMove(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)
    move = models.ForeignKey(Move, on_delete=models.CASCADE)

class Evolution(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    base_pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE, related_name="base_evolution")
    evolved_pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE, related_name="evolves_to")
    method = models.CharField(max_length=100)  # e.g. "level 16", "moon stone"
